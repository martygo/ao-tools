"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { HeadlineTemplate } from "@/components/headline-template";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { PhoneValidator } from "./phone-validator";
import { getOperatorCodeName } from "./get-operator-name";
import { CopyClipboard } from "@/components/copy-clipboard";

type Result = {
  phoneNumber: string;
  operatorName: string;
};

const formSchema = z.object({
  phone: z.string().refine((value) => new PhoneValidator().isPhone(value), {
    message: "Número de telefone inválido",
  }),
});

export default function Phone() {
  const [result, setResult] = useState<Result | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setResult({
      phoneNumber: values.phone,
      operatorName: getOperatorCodeName(values.phone),
    });

    form.reset();
  }

  const phoneNumberValidationResult = `Número: ${result?.phoneNumber}.
    Número é de Angola: Sim  
    Código de chamada: +244
    Operadora: ${result?.operatorName}`;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <HeadlineTemplate
        title="Validar Telefone"
        description="Validar números de telefone. Verifique se o número é válido e obtenha e a operador correspondente."
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-x-4 mb-4"
        >
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Indique um número de telefone pra validar..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={!form.formState.isValid}>
            Validar
          </Button>
        </form>
      </Form>

      {result && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Número: {result?.phoneNumber}.</span>
              <CopyClipboard textToBeCopied={phoneNumberValidationResult} />
            </div>
            <div className="flex justify-between items-center">
              <span>Número é de Angola?: Sim.</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Código de chamada: +244.</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Operadora: {result?.operatorName}.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLingui } from "@lingui/react/macro";
import { Html } from "@react-three/drei";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as THREE from "three";
import { z } from "zod";

import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import { contactFormScrollProgress } from "@/canvases/space/components/CameraControls";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollContext } from "@/contexts/ScrollContext";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

function ContactForm() {
  const { t } = useLingui();
  const { scrollProgress } = useScrollContext();

  // Form schema
  const contactFormSchema = z.object({
    subject: z
      .string()
      .min(3, {
        message: t`Subject must be at least 3 characters long.`,
      })
      .max(64, {
        message: t`Subject must be at max 64 characters long.`,
      }),
    message: z
      .string()
      .min(3, {
        message: t`Message must be at least 3 characters long.`,
      })
      .max(2048, {
        message: t`Message must be at max 2048 characters long.`,
      }),
  });

  // Hide text when the current section viewed is not appriopriate for it to appear
  const materialsToHideRefs = useRef<(THREE.Material | HTMLElement)[]>([]);
  useAnimateObjectVisibility(materialsToHideRefs, [
    contactFormScrollProgress,
    contactFormScrollProgress,
  ]);

  // Form state
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      subject: "",
      message: "",
    },
  });

  // Handle send email service
  async function onSubmit() {
    setIsSendingEmail(true);
    const toastLoadingId = toast.loading(`Sending...`);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current as HTMLFormElement,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      toast.dismiss(toastLoadingId);
      toast.success(t`Successfully sent the mail!`);
    } catch {
      toast.dismiss(toastLoadingId);
      toast.error(t`Something went wrong with sending the mail!`);
    } finally {
      setIsSendingEmail(false);
    }
  }

  return (
    <Html
      className={cn(
        "select-none",
        scrollProgress !== contactFormScrollProgress
          ? "pointer-events-none"
          : "pointer-events-auto"
      )}
      position={[1890, 32.5, -220]}
    >
      {/* Title */}
      <h3
        ref={(el) => {
          materialsToHideRefs.current.push(el as HTMLHeadingElement);
        }}
        className="w-max text-blue-gradient text-center opacity-0 text-7xl flex items-center gap-2 font-bold"
      >
        <span>{t`Contact`}</span>
      </h3>

      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-8 md:w-[27.5rem] max-md:w-72"
          ref={formRef}
        >
          {/* Name */}
          <FormField
            control={form.control}
            name="subject"
            disabled={isSendingEmail}
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  ref={(el) => {
                    materialsToHideRefs.current.push(el as HTMLLabelElement);
                  }}
                  className="opacity-0"
                >{t`Subject`}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t`e.g. Order for a website`}
                    {...field}
                    ref={(el) => {
                      materialsToHideRefs.current.push(el as HTMLInputElement);
                    }}
                    tabIndex={
                      scrollProgress !== contactFormScrollProgress
                        ? -1
                        : undefined
                    }
                    className="focus-visible:ring-[#1f2cdd] opacity-0 focus-visible:border-[#3f5fff]"
                    name="subject"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            disabled={isSendingEmail}
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  ref={(el) => {
                    materialsToHideRefs.current.push(el as HTMLLabelElement);
                  }}
                  className="opacity-0"
                >{t`Message`}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t`I am writing to you because...`}
                    {...field}
                    className="opacity-0 focus-visible:ring-[#1f2cdd] focus-visible:border-[#3f5fff] resize-none overflow-y-scroll h-48"
                    ref={(el) => {
                      materialsToHideRefs.current.push(
                        el as HTMLTextAreaElement
                      );
                    }}
                    tabIndex={
                      scrollProgress !== contactFormScrollProgress
                        ? -1
                        : undefined
                    }
                    name="message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button
            className="opacity-0 w-full bg-[#273de6] focus-visible:ring-[#3f5fff] hover:bg-[#1c30c4]"
            type="submit"
            ref={(el) => {
              materialsToHideRefs.current.push(el as HTMLButtonElement);
            }}
            tabIndex={
              scrollProgress !== contactFormScrollProgress ? -1 : undefined
            }
            disabled={isSendingEmail}
          >
            {t`Send`}
          </Button>
        </form>
      </Form>
    </Html>
  );
}

export default ContactForm;

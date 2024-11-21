"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Building } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useFirestore } from "@/hooks/use-firebase";
import { db } from "@/lib/firebase";
import { toast } from "sonner";
import { useLanguage } from "@/components/providers/language-provider";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Contact() {
  const { addDocument, loading } = useFirestore();
  const { t, locale } = useLanguage();

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t("contact.form.name.error")
    }),
    email: z.string().email({
      message: t("contact.form.email.error")
    }),
    phone: z.string().min(10, {
      message: t("contact.form.phone.error")
    }),
    organization: z.string().min(2, {
      message: t("contact.form.organization.error")
    }),
    message: z.string().min(10, {
      message: t("contact.form.message.error")
    }),
  });

  type FormValues = z.infer<typeof formSchema>;
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await addDocument('webcollection/contact/submissions', {
        ...data,
        createdAt: new Date().toISOString(),
        status: 'new',
        locale: locale || 'en'
      });
      
      toast.success(t("contact.form.success"), {
        description: t("contact.form.successDescription"),
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(t("contact.form.error"), {
        description: t("contact.form.errorDescription"),
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.name.label")}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t("contact.form.name.placeholder")} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.email.label")}</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder={t("contact.form.email.placeholder")} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.phone.label")}</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder={t("contact.form.phone.placeholder")} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.organization.label")}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t("contact.form.organization.placeholder")} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.form.message.label")}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("contact.form.message.placeholder")}
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? t("contact.form.sending") : t("contact.form.submit")}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">{t("contact.connectWithUs.title")}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.connectWithUs.email.label")}</p>
                    <p className="text-muted-foreground">{t("contact.connectWithUs.email.value")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.connectWithUs.phone.label")}</p>
                    <p className="text-muted-foreground">{t("contact.connectWithUs.phone.value")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Building className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.connectWithUs.office.label")}</p>
                    <p className="text-muted-foreground">{t("contact.connectWithUs.office.value")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">{t("contact.faq.title")}</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">{t("contact.faq.questions.getStarted.question")}</p>
                  <p className="text-muted-foreground">{t("contact.faq.questions.getStarted.answer")}</p>
                </div>
                <div>
                  <p className="font-medium">{t("contact.faq.questions.security.question")}</p>
                  <p className="text-muted-foreground">{t("contact.faq.questions.security.answer")}</p>
                </div>
                <div>
                  <p className="font-medium">{t("contact.faq.questions.cities.question")}</p>
                  <p className="text-muted-foreground">{t("contact.faq.questions.cities.answer")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
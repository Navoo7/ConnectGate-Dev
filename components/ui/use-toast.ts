"use client"

import * as React from "react"
import { toast as sonnerToast } from "sonner"

type ToastProps = {
  title?: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  variant?: "default" | "destructive"
}

export function useToast() {
  const toast = ({ title, description, action, variant = "default" }: ToastProps) => {
    sonnerToast(title, {
      description,
      action: action ? {
        label: action.label,
        onClick: action.onClick,
      } : undefined,
      style: variant === "destructive" ? { backgroundColor: "var(--destructive)", color: "var(--destructive-foreground)" } : undefined,
    })
  }

  return { toast }
}
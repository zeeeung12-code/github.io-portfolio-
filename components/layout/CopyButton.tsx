"use client";

import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

/** Click to copy `value` to the clipboard, with brief "복사됨" feedback. */
export default function CopyButton({
  value,
  label,
}: {
  value: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`${label ?? value} 복사`}
      className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-cream"
    >
      <span>{label ?? value}</span>
      <span className="relative inline-flex items-center text-xs text-faint transition-colors group-hover:text-accent">
        {copied ? (
          <span className="flex items-center gap-1 text-accent">
            <FiCheck /> 복사됨
          </span>
        ) : (
          <FiCopy className="opacity-0 transition-opacity group-hover:opacity-100" />
        )}
      </span>
    </button>
  );
}

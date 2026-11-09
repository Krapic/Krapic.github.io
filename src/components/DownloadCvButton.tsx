import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function DownloadCvButton() {
  const { t } = useLanguage();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const download = async () => {
    if (busy) return;
    setBusy(true);
    setError(false);
    try {
      const { downloadCv } = await import("@/lib/generate-cv");
      await downloadCv();
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="download-control">
      <button
        type="button"
        className="primary-button"
        onClick={download}
        disabled={busy}
        aria-busy={busy}
      >
        {busy ? (
          <Loader2 size={17} className="animate-spin" />
        ) : (
          <Download size={17} />
        )}
        {busy ? t.cv.preparing : t.cv.download}
      </button>
      <span className="sr-only" role="status">
        {busy ? t.cv.generating : ""}
      </span>
      {error && (
        <p role="alert" className="download-error">
          {t.cv.error}
        </p>
      )}
    </div>
  );
}

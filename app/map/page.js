import { QrCodeScannerMap } from "@/components/QrCodeScannerMap";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <QrCodeScannerMap />
    </section>
  );
}

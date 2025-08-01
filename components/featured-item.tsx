export default function FeatureItem({
  icon,
  text,
  subtitle,
  highlighted = false,
}: {
  icon: React.ReactNode;
  text: string;
  subtitle?: string;
  highlighted?: boolean;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-start gap-2">
        <div
          className={`my-0.5 size-4 flex-shrink-0 ${
            highlighted ? "text-white" : "text-[#A2A2A3]"
          }`}
        >
          {icon}
        </div>
        <div className="min-h-4">
          <span
            className={`inline ${
              highlighted ? "font-semibold text-white" : "text-white"
            }`}
          >
            {text}
          </span>
          {subtitle && (
            <span className="text-[#A2A2A3] text-xs inline-block ml-1">
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

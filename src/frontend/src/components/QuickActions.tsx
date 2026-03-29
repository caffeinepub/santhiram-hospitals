import { useLanguage } from "@/i18n/LanguageContext";
import { AlertCircle, Calendar, HeartPulse, UserSearch } from "lucide-react";
import { motion } from "motion/react";

export function QuickActions() {
  const { t } = useLanguage();

  const actions = [
    {
      icon: <Calendar className="w-7 h-7" />,
      titleKey: "qaBookAppointment",
      descKey: "qaBookDesc",
      href: "#appointment",
      iconBg: "bg-navy",
      iconStyle: undefined as React.CSSProperties | undefined,
    },
    {
      icon: <AlertCircle className="w-7 h-7" />,
      titleKey: "qaEmergency",
      descKey: "qaEmergencyDesc",
      href: "tel:+919121022077",
      iconBg: "bg-emergency",
      iconStyle: undefined as React.CSSProperties | undefined,
    },
    {
      icon: <UserSearch className="w-7 h-7" />,
      titleKey: "qaFindDoctor",
      descKey: "qaFindDoctorDesc",
      href: "#doctors",
      iconBg: "bg-teal",
      iconStyle: undefined as React.CSSProperties | undefined,
    },
    {
      icon: <HeartPulse className="w-7 h-7" />,
      titleKey: "qaHealthCheckups",
      descKey: "qaHealthCheckupsDesc",
      href: "#appointment",
      iconBg: "",
      iconStyle: {
        background: "linear-gradient(135deg, #C9A227, #a07d1a)",
      } as React.CSSProperties,
    },
  ];

  return (
    <section className="py-12 bg-hospital-bg" data-ocid="quick_actions.section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {actions.map((action, i) => (
            <motion.a
              key={action.titleKey}
              href={action.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group block rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 bg-white border border-hospital-border"
              data-ocid={`quick_actions.item.${i + 1}`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${action.iconBg} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                style={action.iconStyle}
              >
                {action.icon}
              </div>
              <h3 className="font-bold text-navy text-base mb-2">
                {t(action.titleKey)}
              </h3>
              <p className="text-sm text-hospital-muted leading-relaxed">
                {t(action.descKey)}
              </p>
              <div className="mt-4 text-teal text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                {t("learnMore")} <span>→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

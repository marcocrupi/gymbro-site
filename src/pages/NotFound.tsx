import { Link } from "react-router-dom";
import { useI18n } from "../i18n/useI18n";

export default function NotFound() {
  const { t } = useI18n();
  return (
    <div className="container" style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1>404</h1>
      <p style={{ margin: "1rem 0 2rem" }}>{t("notFound.message")}</p>
      <Link to="/" className="btn btn-store btn-google">
        {t("notFound.backHome")}
      </Link>
    </div>
  );
}

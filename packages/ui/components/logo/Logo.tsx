import { LOGO_ICON, LOGO } from "@calcom/lib/constants";

export default function Logo({ small, icon }: { small?: boolean; icon?: boolean }) {
  return (
    <h3 className="logo inline">
      <strong>
        {icon ? (
          <img className="mx-auto w-9" alt="Cal" title="Cal" src={LOGO_ICON} />
        ) : (
          <img
            className={small ? "h-10 w-auto" : "h-5 w-auto"}
            alt="Spherical Workspace Bookings"
            title="Spherical Workspace Bookings"
            src={LOGO}
          />
        )}
      </strong>
    </h3>
  );
}

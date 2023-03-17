import * as Collapsible from "@radix-ui/react-collapsible";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  HomeIcon,
  BellIcon,
  EnvelopeClosedIcon,
  GearIcon,
  PersonIcon,
  TableIcon,
  EnterIcon,
  ImageIcon,
} from "@radix-ui/react-icons";
import React from "react";

const SIDEBAR_DATA = [
  {
    key: "/dashboard",
    icon: <HomeIcon className="w-20 h-20" />,
    title: "Dashboard",
  },
  {
    key: "/client",
    icon: <PersonIcon className="w-20 h-20" />,
    title: "Clients",
    child: [
      {
        icon: <TableIcon className="w-20 h-20" />,
        title: "Listing",
      },
      {
        icon: <EnterIcon className="w-20 h-20" />,
        title: "Payment",
      },
      {
        icon: <ImageIcon className="w-20 h-20" />,
        title: "Gallary",
      },
    ],
  },
  {
    key: "/notification",
    icon: <BellIcon className="w-20 h-20" />,
    title: "Notification",
    child: [
      {
        icon: <EnvelopeClosedIcon className="w-20 h-20" />,
        title: "Email",
      },
    ],
  },
  {
    key: "/settings",
    icon: <GearIcon className="w-20 h-20" />,
    title: "Settings",
  },
];

export default function Sidebar() {
  const [open, setOpen] = React.useState<string | null>("/dashboard");
  const [childActive, setChildActive] = React.useState<string>("/dashboard");
  const handleCollapse = (key: string, item: any) => {
    if (!item.child) {
      setChildActive(item.key);
    }
    if (open && key === open) {
      setOpen(null);
      return;
    }
    setOpen(key);
  };
  const handleClickChild = (key: string) => {
    setChildActive(key);
  };
  return (
    <>
      <div className="py-24 px-32 text-grey">
        <div>
          <div className="px-12 font-semibold mb-16">MAIN MENU</div>
          {SIDEBAR_DATA.map((item, index) => {
            let active = childActive;
            if (!item.child) {
              active = active?.split("-")[0];
            }
            return (
              <Collapsible.Root
                key={index}
                className="CollapsibleRoot"
                open={open === item.key}
                onOpenChange={() => handleCollapse(item.key, item)}
              >
                <Collapsible.Trigger asChild>
                  <div
                    className={`
                     ${
                       active === item.key
                         ? "text-secondary-800 bg-secondary-100 font-semibold "
                         : ""
                     }
                     flex rounded-18 hover:bg-secondary-100 hover:text-secondary-800 p-12 align-middle justify-between mb-8`}
                  >
                    <div className="flex gap-16">
                      {item.icon} {item.title}
                    </div>
                    {item.child && item.child.length > 0 && (
                      <button>
                        {open === item.key ? (
                          <ChevronUpIcon className="w-24 h-24" />
                        ) : (
                          <ChevronDownIcon className="w-24 h-24" />
                        )}
                      </button>
                    )}
                  </div>
                </Collapsible.Trigger>
                <Collapsible.Content>
                  {item.child &&
                    item.child.length > 0 &&
                    item.child.map((itemChild, index) => (
                      <div
                        onClick={() => handleClickChild(`${item.key}-${index}`)}
                        key={index}
                        className={`
                        ${
                          active === `${item.key}-${index}`
                            ? "text-secondary-800 bg-secondary-100 font-semibold "
                            : ""
                        }
                        mb-8 ml-16 flex gap-16 cursor-pointer p-12 rounded-18 hover:bg-secondary-100 hover:text-secondary-800
                        `}
                      >
                        {itemChild.icon}
                        {itemChild.title}
                      </div>
                    ))}
                </Collapsible.Content>
              </Collapsible.Root>
            );
          })}
        </div>
      </div>
    </>
  );
}

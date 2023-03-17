import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function Card(props: Props) {
  return <div className="bg-primary-500 rounded-18 p-24">{props.children}</div>;
}

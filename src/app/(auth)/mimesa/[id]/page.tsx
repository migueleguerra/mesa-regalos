import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Mesa",
};

const MiMesa = async ({ params }: { params: { id: string } }) => {
  return <h1>Mesa {params.id}</h1>;
};

export default MiMesa;

import CustomersDP from "@/component/template/CustomersDP";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Index() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const {
    query: { customerId },
    isReady,
  } = router;
  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady]);
  if (data) return <CustomersDP data={data} />;
}

export default Index;

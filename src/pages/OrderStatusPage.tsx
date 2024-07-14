import { useGetMyOrders } from "@/api/OrderApi";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import OrderStatusHeader from "@/components/OrderStatusHeader";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!orders || orders.length === 0) {
    return "No orders found";
  }

  return (
    <div className="space-y-10 px-5">
      {orders.map((order) => (
        <div className="space-y-10 bg-gray-50 p-10 rounded-lg ">
          <OrderStatusHeader order={order} />
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;

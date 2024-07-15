import { Order } from "@/types";
import { Dot } from "lucide-react";
import { Separator } from "./ui/separator";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col">
        <span className="font-bold">Delivering to:</span>
        <span>{order.deliveryDetails.name}</span>
        <span>
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Your Order</span>
        <span>
          {order.cartItems.map((item, index) => (
            <span className="flex" key={index}>
              <Dot />
              {item.name} x {item.quantity}
            </span>
          ))}
        </span>
      </div>
      <Separator/>
      <div className="flex flex-col">
        <span className="font-bold">Total</span>
        <span>&#x20B9; {(order.totalAmount / 100).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;

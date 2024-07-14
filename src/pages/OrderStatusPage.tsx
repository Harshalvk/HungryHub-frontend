import { useGetMyOrders } from "@/api/OrderApi"
import { LoadingSpinner } from "@/components/LoadingSpinner"

const OrderStatusPage = () => {
  const { orders, isLoading} = useGetMyOrders()
  
  if(isLoading){
    return <LoadingSpinner/>
  }

  if(!orders || orders.length === 0) {
    return "No orders found"
  }
  
  return (
    <div>
      
    </div>
  )
}

export default OrderStatusPage

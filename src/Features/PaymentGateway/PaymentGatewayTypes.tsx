export interface PayemntGatewayTypes {
  amount: number | null;
  currency: number | null;
  orderId: string | null;
  keyId: string | undefined;
  keySecret: string | undefined;
}

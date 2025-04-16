export default function VehicleDetail({ params }: { params: { vehicle_id: string } }) {
    return <h1>Vehicle ID: {params.vehicle_id}</h1>;
  }
  
export default function RouteDetail({ params }: { params: { route_id: string } }) {
    return <h1>Route ID: {params.route_id}</h1>;
  }
  
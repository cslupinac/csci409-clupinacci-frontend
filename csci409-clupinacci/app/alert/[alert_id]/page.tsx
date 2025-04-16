export default function AlertDetail({ params }: { params: { alert_id: string } }) {
    return <h1>Alert ID: {params.alert_id}</h1>;
  }
  
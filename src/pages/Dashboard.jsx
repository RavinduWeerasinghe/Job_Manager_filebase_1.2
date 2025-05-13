import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1><span style={{ color: 'red' }}>RG Graphics</span> Job Manager</h1>
      <div style={{ marginTop: '30px' }}>
        <button onClick={() => navigate('/customers')}>Customers</button><br /><br />
        <button onClick={() => navigate('/jobs')}>Job List</button><br /><br />
        <button onClick={() => navigate('/payments')}>Payments</button><br /><br />
        <button onClick={() => navigate('/settings')}>Settings</button>
      </div>
    </div>
  );
}
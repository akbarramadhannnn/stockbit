import Search, { Input } from './SearchStyle';

const Index = ({ value, onChange, onClick }) => {
  return (
    <Search>
      <div style={{ position: 'relative', width: '95%' }}>
        <Input name="input" type="text" value={value} onChange={onChange} />
      </div>

      <div style={{ position: 'relative', width: '15%', textAlign: 'right' }}>
        <button onClick={onClick}>Search</button>
      </div>
    </Search>
  );
};

export default Index;

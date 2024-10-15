import { HelloWorld } from '@variant-ui/react';
import theme from '@variant-ui/material-theme';

const ColorBlock = ({ color, name }: { color: string; name?: string }) => (
  <div>
    <p>{name}</p>
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: color,
      }}
    />
  </div>
);

const ColorScale = ({
  color,
}: {
  color: keyof typeof theme.colors.palette;
}) => {
  const index = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
  const palette = theme.colors.palette[color];

  return (
    <>
      <p>{color}</p>
      <div style={{ display: 'flex' }}>
        {index.map((i) => (
          <ColorBlock key={i} color={palette[i]} />
        ))}
      </div>
    </>
  );
};

const App = () => {
  const colors = theme.colors;

  return (
    <>
      <HelloWorld name="Tester" />
      <div style={{ display: 'flex' }}>
        <ColorBlock color={colors.primary} name="primary" />
        <ColorBlock color={colors.secondary} name="secondary" />
        <ColorBlock color={colors.success} name="success" />
        <ColorBlock color={colors.error} name="error" />
        <ColorBlock color={colors.warning} name="warning" />
        <ColorBlock color={colors.info} name="info" />
      </div>
      {Object.keys(colors.palette).map((color) => (
        <ColorScale key={color} color={color as keyof typeof colors.palette} />
      ))}
    </>
  );
};

export default App;

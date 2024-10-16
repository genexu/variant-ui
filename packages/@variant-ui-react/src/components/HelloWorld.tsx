type THelloWorldProps = { name?: string };
type THelloWorld = (props: THelloWorldProps) => JSX.Element;

export const HelloWorld: THelloWorld = ({
  name = 'World',
}: THelloWorldProps) => {
  return <h1>Hello {name}! This is @variant-ui/react!</h1>;
};

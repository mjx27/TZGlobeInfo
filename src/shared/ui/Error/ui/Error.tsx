interface IProps {
  errorMsg: string;
}

export const Error = ({ errorMsg }: IProps) => {
  return <div>{errorMsg}</div>;
};

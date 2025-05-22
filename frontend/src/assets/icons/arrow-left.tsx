import Svg, { Path } from "react-native-svg";
import { SvgProps } from "react-native-svg";

const ArrowLeft = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <Path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default ArrowLeft
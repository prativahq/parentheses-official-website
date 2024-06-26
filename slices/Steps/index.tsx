import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Steps`.
 */
export type StepsProps = SliceComponentProps<Content.StepsSlice>;

/**
 * Component for "Steps" Slices.
 */
const Steps = ({ slice }: StepsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for steps (variation: {slice.variation}) Slices
    </section>
  );
};

export default Steps;

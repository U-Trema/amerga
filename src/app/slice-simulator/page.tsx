import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

// TODO quand y aura des components, dé-commenter
// import { components } from "../../slices";

export default async function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  const { state } = await searchParams;
  const slices = getSlices(state);

  return (
    <SliceSimulator>
      {/*<SliceZone slices={slices} components={components} />*/}
      <SliceZone slices={slices} />
    </SliceSimulator>
  );
}

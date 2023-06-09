import { data } from "@/settings/data.settings";
import Description from "./Description";
import { v4 } from "uuid";
import Container from "./Container";

const Descriptions = () => {
  return (
    <div>
      <Container className="grid grid-cols-2 items-center gap-12 justify-between transition-all max-lg:grid-cols-1 max-lg:gap-6">
        {data.descriptions.map((description) => (
          <Description key={v4()} description={description} />
        ))}
      </Container>
    </div>
  );
};

export default Descriptions;

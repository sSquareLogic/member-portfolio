import { data } from "@/settings/data.settings";
import Container from "./Container";
import { styles } from "@/styles/styles";
import { theme } from "@/settings/theme";
const Titles = () => {
  return (
    <div className="titles">
      <Container>
        <p
          className="text-gradient font-SPACEGR text-TITLE font-bold transition-all max-lg:text-[64px] max-sm:text-[32px]"
          style={{ backgroundImage: styles[`${theme.color}_GRADIENT`] }}
        >
          <span className="mr-[5vw]"></span>
          {data.title}
        </p>
      </Container>
    </div>
  );
};

export default Titles;

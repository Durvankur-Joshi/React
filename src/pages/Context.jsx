import Content from "../Context/Content";
import ThemeProvider from "../Context/Theme";

function Context()
{
    return(
        <>
          <ThemeProvider>
            <Content />
          </ThemeProvider>
        </>
    )
}

export default Context;
import Content from "../Context/contnet";
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
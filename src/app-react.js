import React, { Component } from "react";
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";

//----test
import Button from "react-uwp/Button";

class MyComponent extends Component {
  render() {
    return (
        <div className="button">
            <Button tooltip="Mini Tooltip">Work</Button>
            <Button tooltip="Mini Tooltip">Work1</Button>
        </div>
    )
  }
}
//--------------

class App extends Component {
    render() {
        return (
            <UWPThemeProvider
                theme={getTheme({
                    themeName: "dark",
                    accent: "#FF3300",
                    //desktopBackgroundImage: "http://127.0.0.1:8092/static/images/jennifer-bailey-10753.jpg",
                    useFluentDesign: true
                })}
            >

            <MyComponent style="{{  top: 40px; left:40px; }}"/>
            </UWPThemeProvider>
        );
    }
}

export default App;
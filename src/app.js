import React, { Component } from "react";
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";

//----test
import Button from "react-uwp/Button";

class MyComponent extends Component {
  render() {
    const baseStyle = React.CSSProperties = {
        margin:'100px 10px 10px 0'
    };
    const { theme } = this.context;
    console.log(baseStyle);
    return (
        <div>
            <Button style="{baseStyle}" tooltip="Mini Tooltip">Work</Button>
            <Button style="{{  margin: 4 }}" tooltip="Mini Tooltip">Work1</Button>
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

            <MyComponent/>
            </UWPThemeProvider>
        );
    }
}

export default App;
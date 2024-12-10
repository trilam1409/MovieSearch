import React, { useState } from 'react';
import { WebView, WebViewMessageEvent, WebViewProps } from 'react-native-webview';

const minHeight = 40;

interface Props extends WebViewProps {
  html: string;
  fontSize?: number;
  color?: string;
  customStyle?: string;
}
export function WebViewAutoHeight({html, fontSize, color, customStyle, ...props}: Props) {

  const [height, setHeight] = useState(minHeight);

  const _adjustHeight = (event: WebViewMessageEvent) => {
    const getHeight = Number(event.nativeEvent.data);
    if (getHeight < minHeight) {
      setHeight(minHeight);
      return;
    }
    setHeight(getHeight + 12);
  };

  const HTML = WebViewHTMLFormat({html, fontSize, color, customStyle});

  return (
    <WebView
      {...props}
      useWebKit
      originWhitelist={['*']}
      source={{
        html: HTML,
      }}
      style={{height}}
      onMessage={_adjustHeight}
      javaScriptEnabled
      injectedJavaScript={
        'window.ReactNativeWebView.postMessage(document.body.scrollHeight)'
      }
      androidHardwareAccelerationDisabled={true}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      scalesPageToFit={true}
      startInLoadingState
    />
  );
}

const WebViewHTMLFormat = ({
   html,
   color = '#000',
   fontSize = 14,
   customStyle,
  }: Props): string => {

  return `
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <style>
                body {
                    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu !important;
                    margin: 0;
                    padding: 0;
                    font-size: ${fontSize}px !important;
                    color: ${color} !important;                    
                    background: none !important;
                    line-height: 1.5;             
                }
                p, div, b, span, a, ul, ol, small, strong, h1, h2, h3, h4, h5, h6, ul, li, ol, i, u, em {
                    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu !important;
                    font-size: ${fontSize}px !important;
                    color: ${color} !important;
                    background: none !important;
                    line-height: 1.5 !important;
                    margin-top: 0;
                    margin-bottom: 0;
                    font-weight: 400 !important;
                    font-style: normal !important;
                    text-decoration: none !important;
                }
                ul, ol {
                    padding-left: 16px !important;
                    margin-left: 0 !important;
                }
                li {
                    padding-left: 0 !important;
                    margin-left: 0 !important;
                }
                ${customStyle}
            </style>
        </head>
        <body>
            ${html}
        </body>
        </html>
    `;
};


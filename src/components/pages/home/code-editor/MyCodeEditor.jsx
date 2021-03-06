import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import CopyToClipboard from "../../../common/CopyToClipboard";
import { code_editor_base_text } from "../../../../constants/AppConstants";

export default function MyCodeEditor() {
    const [code, setCode] = React.useState(code_editor_base_text);
    const [language, setLanguage] = React.useState("js");

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="d-flex m-1">
                        <select
                            className="form-select"
                            value={language}
                            onChange={(e) => {
                                setLanguage(e.target.value);
                            }}
                        >
                            <option value="js">Language: javascript</option>
                            <option value="abap">Language: abap</option>
                            <option value="aes">Language: aes</option>
                            <option value="apex">Language: apex</option>
                            <option value="azcli">Language: azcli</option>
                            <option value="bat">Language: bat</option>
                            <option value="brainfuck">
                                Language: brainfuck
                            </option>
                            <option value="c">Language: c</option>
                            <option value="cameligo">Language: cameligo</option>
                            <option value="clike">Language: clike</option>
                            <option value="clojure">Language: clojure</option>
                            <option value="coffeescript">
                                Language: coffeescript
                            </option>
                            <option value="cpp">Language: cpp</option>
                            <option value="csharp">Language: csharp</option>
                            <option value="csp">Language: csp</option>
                            <option value="css">Language: css</option>
                            <option value="dart">Language: dart</option>
                            <option value="dockerfile">
                                Language: dockerfile
                            </option>
                            <option value="erlang">Language: erlang</option>
                            <option value="fsharp">Language: fsharp</option>
                            <option value="go">Language: go</option>
                            <option value="graphql">Language: graphql</option>
                            <option value="handlebars">
                                Language: handlebars
                            </option>
                            <option value="hcl">Language: hcl</option>
                            <option value="html">Language: html</option>
                            <option value="ini">Language: ini</option>
                            <option value="java">Language: java</option>
                            <option value="json">Language: json</option>
                            <option value="jsx">Language: jsx</option>
                            <option value="julia">Language: julia</option>
                            <option value="kotlin">Language: kotlin</option>
                            <option value="less">Language: less</option>
                            <option value="lex">Language: lex</option>
                            <option value="livescript">
                                Language: livescript
                            </option>
                            <option value="lua">Language: lua</option>
                            <option value="markdown">Language: markdown</option>
                            <option value="mips">Language: mips</option>
                            <option value="msdax">Language: msdax</option>
                            <option value="mysql">Language: mysql</option>
                            <option value="nginx">Language: nginx</option>
                            <option value="objective-c">
                                Language: objective-c
                            </option>
                            <option value="pascal">Language: pascal</option>
                            <option value="pascaligo">
                                Language: pascaligo
                            </option>
                            <option value="perl">Language: perl</option>
                            <option value="pgsql">Language: pgsql</option>
                            <option value="php">Language: php</option>
                            <option value="plaintext">
                                Language: plaintext
                            </option>
                            <option value="postiats">Language: postiats</option>
                            <option value="powerquery">
                                Language: powerquery
                            </option>
                            <option value="powershell">
                                Language: powershell
                            </option>
                            <option value="pug">Language: pug</option>
                            <option value="python">Language: python</option>
                            <option value="r">Language: r</option>
                            <option value="razor">Language: razor</option>
                            <option value="redis">Language: redis</option>
                            <option value="redshift">Language: redshift</option>
                            <option value="restructuredtext">
                                Language: restructuredtext
                            </option>
                            <option value="ruby">Language: ruby</option>
                            <option value="rust">Language: rust</option>
                            <option value="sb">Language: sb</option>
                            <option value="scala">Language: scala</option>
                            <option value="scheme">Language: scheme</option>
                            <option value="scss">Language: scss</option>
                            <option value="shell">Language: shell</option>
                            <option value="sol">Language: sol</option>
                            <option value="sql">Language: sql</option>
                            <option value="st">Language: st</option>
                            <option value="stylus">Language: stylus</option>
                            <option value="swift">Language: swift</option>
                            <option value="systemverilog">
                                Language: systemverilog
                            </option>
                            <option value="tcl">Language: tcl</option>
                            <option value="toml">Language: toml</option>
                            <option value="tsx">Language: tsx</option>
                            <option value="twig">Language: twig</option>
                            <option value="typescript">
                                Language: typescript
                            </option>
                            <option value="vb">Language: vb</option>
                            <option value="vbscript">Language: vbscript</option>
                            <option value="verilog">Language: verilog</option>
                            <option value="vue">Language: vue</option>
                            <option value="xml">Language: xml</option>
                            <option value="yaml">Language: yaml</option>
                        </select>
                        <CopyToClipboard selector="textarea.w-tc-editor-text" />
                    </div>
                    <div className="form-control m-1" data-color-mode="dark">
                        <CodeEditor
                            value={code}
                            language={language}
                            placeholder="Please enter your code here."
                            onChange={(evn) => setCode(evn.target.value)}
                            padding={15}
                            style={{
                                fontSize: 12,
                                backgroundColor: "#f5f5f5",
                                fontFamily:
                                    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

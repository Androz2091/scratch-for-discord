export default `

<xml xmlns="https://developers.google.com/blockly/xml">
    <variables>
        <variable id="OZ0l|^XRQH?T?s;b$B%X">arguments</variable>
        <variable id="dN-GQox{6nqmX%so5NT^">command</variable>
        <variable id="#ZhzgKnmzhbtq(;-qrAt">regex</variable>
        <variable id="i)rl||juyf^$sda|VDs3">matches</variable>
    </variables>
    <block type="s4d_login" id="7#J_k1iBFdpErG@Fhjet" x="0" y="0">
        <value name="TOKEN">
            <shadow type="text" id="g\`/oX0K5(W{$:,c#.nxq">
                <field name="TEXT">Your bot token</field>
            </shadow>
        </value>
    </block>
    <block type="jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot" id="O\${CpAqLqM+pY4ozizbu" x="0" y="106">
        <statement name="STATEMENTS">
            <block type="variables_set" id="Fo+ksP#~73~o,EeQmq{u">
                <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                <value name="VALUE">
                    <block type="lists_split" id="1YzV9Eu2@GGwP5RREIIR">
                        <mutation mode="SPLIT"></mutation>
                        <field name="MODE">SPLIT</field>
                        <value name="INPUT">
                            <block type="s4d_message_content" id="E#m(;pB|W+d+AtJCc{5e"></block>
                        </value>
                        <value name="DELIM">
                            <shadow type="text" id="Z.|mO+X9gt-/BR;jjMkI">
                                <field name="TEXT"> </field>
                            </shadow>
                        </value>
                    </block>
                </value>
                <next>
                    <block type="variables_set" id="U^i0Ox!/+F6x[NrTqTpR">
                        <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                        <value name="VALUE">
                            <block type="lists_getIndex" id="9ul#e70.^\`!G^_~-BlK~">
                                <mutation statement="false" at="true"></mutation>
                                <field name="MODE">GET_REMOVE</field>
                                <field name="WHERE">FROM_START</field>
                                <value name="VALUE">
                                    <block type="variables_get" id="z-Mavm-5KXE/Y;G)]0%i">
                                        <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                    </block>
                                </value>
                                <value name="AT">
                                    <block type="math_number" id="n6Es1J;;TYupl;g]g)Eg">
                                        <field name="NUM">1</field>
                                    </block>
                                </value>
                            </block>
                        </value>
                        <next>
                            <block type="controls_if" id="3XA36VU);D_1N5vf9p(Z">
                                <value name="IF0">
                                    <block type="logic_compare" id="1igBlMs)G_=BaFXSd3rc">
                                        <field name="OP">EQ</field>
                                        <value name="A">
                                            <block type="variables_get" id="764~nc#(*|4bhyY/,K{h">
                                                <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                            </block>
                                        </value>
                                        <value name="B">
                                            <block type="text" id="[P2gt2r%QKJF3|~Q$E~+">
                                                <field name="TEXT">!bracket-text</field>
                                            </block>
                                        </value>
                                    </block>
                                </value>
                                <statement name="DO0">
                                    <block type="variables_set" id="FPtD:ZI*O#X1hF{)AlrB">
                                        <field name="VAR" id="#ZhzgKnmzhbtq(;-qrAt">regex</field>
                                        <value name="VALUE">
                                            <block type="jg_text_regex_create_new_regex_of" id=",C\`|+Y:PK3NXP8}OzTb7">
                                                <field name="TEXT">/(?&lt;=\\[)\\S*(?=\\])/gm</field>
                                            </block>
                                        </value>
                                        <next>
                                            <block type="jg_comments_connected_comment" id="+}-l!O/z$6/+V9ID:wj8">
                                                <field name="TEXT">The above RegEx gets all of the text&amp;#10;inside of [ and ]&amp;#10;RegEx can be made with https://regex101.com/</field>
                                                <next>
                                                    <block type="variables_set" id="(6[LOn@HW:J-4Fu!8E5f">
                                                        <field name="VAR" id="i)rl||juyf^$sda|VDs3">matches</field>
                                                        <value name="VALUE">
                                                            <block type="jg_lists_regex_list_of_matches_from_regex_on_text" id="kd3kLK)f^|$?_Zn%XN~t">
                                                                <value name="REGEX">
                                                                    <block type="variables_get" id="mt(Q.^7,)c*r6(Z_{mtx">
                                                                        <field name="VAR" id="#ZhzgKnmzhbtq(;-qrAt">regex</field>
                                                                    </block>
                                                                </value>
                                                                <value name="TEXT">
                                                                    <block type="lists_split" id="dXoK}l3=r:Qu|E|[I_EZ">
                                                                        <mutation mode="JOIN"></mutation>
                                                                        <field name="MODE">JOIN</field>
                                                                        <value name="INPUT">
                                                                            <block type="variables_get" id=":}|4XGnUc}sJZ_qIWFFX">
                                                                                <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                                            </block>
                                                                        </value>
                                                                        <value name="DELIM">
                                                                            <shadow type="text" id="R/4CiqYnjEYgTePNX7l=">
                                                                                <field name="TEXT"> </field>
                                                                            </shadow>
                                                                        </value>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </value>
                                                        <next>
                                                            <block type="controls_if" id="d*|-%m|o*z{j1UBtKJ)P">
                                                                <value name="IF0">
                                                                    <block type="logic_compare" id="M\`JEem/8sMEr^7jzv+0K">
                                                                        <field name="OP">GT</field>
                                                                        <value name="A">
                                                                            <block type="lists_length" id="Q_%.l2954]TC_:tw:5]a">
                                                                                <value name="VALUE">
                                                                                    <block type="variables_get" id="U7ZL~^#kA}rs*/9G7Oi+">
                                                                                        <field name="VAR" id="i)rl||juyf^$sda|VDs3">matches</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </value>
                                                                        <value name="B">
                                                                            <block type="math_number" id="HZgy!jHBk)Cy#bLJU/Q)">
                                                                                <field name="NUM">0</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </value>
                                                                <statement name="DO0">
                                                                    <block type="s4d_reply" id="x)6(O_WVTd7V*!ah/9i3">
                                                                        <value name="CONTENT">
                                                                            <shadow type="text" id="7J}mkQ:9PW/STX*RNRJ(">
                                                                                <field name="TEXT">Hey!</field>
                                                                            </shadow>
                                                                            <block type="text_join" id=".+#^Rx|hofd~=Fsq|$Dr">
                                                                                <mutation items="2"></mutation>
                                                                                <value name="ADD0">
                                                                                    <block type="jg_text_remake_paragraph_quotes" id=".Di#{N,bnr56Cz~W{o-f">
                                                                                        <field name="TEXT">The text inside of brackets are:&amp;#10;</field>
                                                                                    </block>
                                                                                </value>
                                                                                <value name="ADD1">
                                                                                    <block type="lists_split" id="\`^@-iDIwYws}[$3W8RvB">
                                                                                        <mutation mode="JOIN"></mutation>
                                                                                        <field name="MODE">JOIN</field>
                                                                                        <value name="INPUT">
                                                                                            <block type="variables_get" id="@\`\`93H#}RZ8JyOHMlMgT">
                                                                                                <field name="VAR" id="i)rl||juyf^$sda|VDs3">matches</field>
                                                                                            </block>
                                                                                        </value>
                                                                                        <value name="DELIM">
                                                                                            <shadow type="text" id="sb6W;d=HV/pcX~*%#WC!">
                                                                                                <field name="TEXT">, </field>
                                                                                            </shadow>
                                                                                        </value>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </statement>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </next>
                                            </block>
                                        </next>
                                    </block>
                                </statement>
                            </block>
                        </next>
                    </block>
                </next>
            </block>
        </statement>
    </block>
</xml>

`
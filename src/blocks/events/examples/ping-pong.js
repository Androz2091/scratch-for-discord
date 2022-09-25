export default `
    <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="s4d_login" id=")O7+PL3eS1Br}h;?X9N$" x="288" y="163">
            <value name="TOKEN">
                <block type="text" id="a7JxIIyK[Yr~TPL^-{W:">
                    <field name="TEXT">Your bot token</field>
                </block>
            </value>
        </block>
        <block type="s4d_on_message" id="Qx+aIDM=_,mj^tl$vGmW" x="288" y="238">
            <statement name="STATEMENTS">
                <block type="controls_if" id="Cr$f.P2*Nq2Dl}?D!r\`(">
                    <value name="IF0">
                        <block type="logic_compare" id="oq-Tf{oSnv,],{N*FSF|">
                            <field name="OP">EQ</field>
                            <value name="A">
                                <block type="s4d_message_content" id="pyFMNvR6J#o6Ky/UA~]f" />
                            </value>
                            <value name="B">
                                <block type="text" id=";[??XKp36YJf2U}j2_}e">
                                    <field name="TEXT">!ping</field>
                                </block>
                            </value>
                        </block>
                    </value>
                    <statement name="DO0">
                        <block type="s4d_reply" id="wgo^7yFoMz,K{AaMl6L)">
                            <value name="CONTENT">
                                <block type="text" id="N-4C!JnJCe,s$75i%8Ce">
                                    <field name="TEXT">pong!</field>
                                </block>
                            </value>
                        </block>
                    </statement>
                </block>
            </statement>
        </block>
    </xml>
`;
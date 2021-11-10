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
              <block type="s4d_message_content" id="pyFMNvR6J#o6Ky/UA~]f"></block>
            </value>
            <value name="B">
              <block type="text" id=";[??XKp36YJf2U}j2_}e">
                <field name="TEXT">!ping</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="s4d_reply" id="=cV{q}25R;1]*xD*y7eY">
            <value name="CONTENT">
              <shadow type="text" id="aLEok6/YAP}z:vO:D]hU">
                <field name="TEXT"></field>
              </shadow>
            </value>
            <value name="EMBED">
              <block type="s4d_message_embed" id="P*EIdJ/qnZE_O^zpQALP">
                <mutation xmlns="http://www.w3.org/1999/xhtml" message="true" color="true"></mutation>
                <value name="MESSAGE">
                  <block type="text" id="(\`5Aa5e#VX\`,2$O5J5~~">
                    <field name="TEXT">pong!</field>
                  </block>
                </value>
                <value name="COLOR">
                  <block type="colour_picker" id="kY}c}_\`#W\`/iTyM_(B$z">
                    <field name="COLOUR">#33ff33</field>
                  </block>
                </value>
              </block>
            </value>
            <value name="MENTION">
              <block type="logic_boolean" id="PeC=Mrcj;8M8Iiwm4JdS">
                <field name="BOOL">TRUE</field>
              </block>
            </value>
          </block>
        </statement>
      </block>
    </statement>
  </block>
</xml>
`;
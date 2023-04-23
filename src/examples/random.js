export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="FHN}r6X.dY2~*4=H\`cx(">response</variable>
  </variables>
  <block type="s4d_login" id="fT~M;9c6nD8u,?x5:(#z" x="514" y="214">
    <value name="TOKEN">
      <block type="text" id="gm9q6s4U71vE!._0u2Gj">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_message" id="[CFg=f^eE9:Ul;)jw4ba" x="517" y="297">
    <statement name="STATEMENTS">
      <block type="controls_if" id="+:}f__wDA=dP-}AJ*uK)">
        <value name="IF0">
          <block type="logic_compare" id="v*To^c@v78+\`wf1t%4_m">
            <field name="OP">EQ</field>
            <value name="A">
              <block type="s4d_message_content" id="ntGHmPF,H3M*{ROzH9M3"></block>
            </value>
            <value name="B">
              <block type="text" id="?-O?rx-i0n[_C%yEg}Q}">
                <field name="TEXT">!random</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="variables_set" id="INW(!Pxdj.@/b_uxEe\`7">
            <field name="VAR" id="FHN}r6X.dY2~*4=H\`cx(">response</field>
            <value name="VALUE">
              <block type="lists_create_with" id="cqa@,[el3=IX4~,_=!7,">
                <mutation items="3"></mutation>
                <value name="ADD0">
                  <block type="text" id="-UOz/}|o.9#r)4-!}?8|">
                    <field name="TEXT">Response 1</field>
                  </block>
                </value>
                <value name="ADD1">
                  <block type="text" id=".O5esh.T\`HvZ$JB3uNSi">
                    <field name="TEXT">Response 2</field>
                  </block>
                </value>
                <value name="ADD2">
                  <block type="text" id="s3Bu^)gln,BuO=fD-my4">
                    <field name="TEXT">Response 3</field>
                  </block>
                </value>
              </block>
            </value>
            <next>
              <block type="s4d_reply" id=";z^a[,J%NQoGX{1\`}_75">
                <value name="CONTENT">
                  <shadow type="text" id="4QK93;l-jyq7deQ-1A|U">
                    <field name="TEXT">Hey!</field>
                  </shadow>
                  <block type="lists_getIndex" id="(F{c(t{q8t|,BWc3?+4;">
                    <mutation statement="false" at="false"></mutation>
                    <field name="MODE">GET</field>
                    <field name="WHERE">RANDOM</field>
                    <value name="VALUE">
                      <block type="variables_get" id="^~j_pBl?-L;qOE)~e[^D">
                        <field name="VAR" id="FHN}r6X.dY2~*4=H\`cx(">response</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </statement>
  </block>
</xml>
`;
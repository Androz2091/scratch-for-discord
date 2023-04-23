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
                <field name="TEXT">!meme</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="ran_red_post" id="e1..)[8{YnYk544d.qi,">
            <value name="MESSAGE">
              <block type="text" id="A\`re6qxOWwRMe*#c,O{3">
                <field name="TEXT">memes</field>
              </block>
            </value>
            <statement name="THEN">
              <block type="s4d_m_create_embed_then" id="3*?tf;_]K;ZMuTQYZ8T\`">
                <statement name="THEN">
                  <block type="s4d_m_create_embed_then_set_color" id="ofvphnGZ=rO+Px2Qjsw\`">
                    <value name="COLOR">
                      <block type="colour_picker" id="@MN11t_1Ztz,R}]/Y+Qx">
                        <field name="COLOUR">#ff0000</field>
                      </block>
                    </value>
                    <next>
                      <block type="s4d_m_create_embed_then_set_title" id="i4eJ],GM|!i)S9RDy1@s">
                        <value name="TITLE">
                          <block type="postVars" id="/Z=!z~MynQQ71:5N(A8d">
                            <field name="INFO">postTitle</field>
                          </block>
                        </value>
                        <value name="URL">
                          <block type="postVars" id="KBG(G\`_Wl|YrqL??8zGa">
                            <field name="INFO">postUrl</field>
                          </block>
                        </value>
                        <next>
                          <block type="s4d_m_create_embed_then_set_image" id="UvdztB)ls:31tro-O0K0">
                            <value name="IMAGE">
                              <block type="postVars" id="W66BO%f/G(/*LL/[MVB1">
                                <field name="INFO">postImg</field>
                              </block>
                            </value>
                            <next>
                              <block type="s4d_m_create_embed_then_send" id="mzFJ,{)pO-EELq%*zT.,">
                                <value name="CHANNEL">
                                  <block type="s4d_message_channel" id="Y8TLYrd%~6E)xn:c!f4_"></block>
                                </value>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
              </block>
            </statement>
          </block>
        </statement>
      </block>
    </statement>
  </block>
</xml>`
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
                <field name="TEXT">!memes</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="ran_red_post" id="|1|.NVlm63=So:ZhuoA,">
            <value name="MESSAGE">
              <block type="text" id="tUL3uM~5=+j6GBesj6=J">
                <field name="TEXT">memes</field>
              </block>
            </value>
            <statement name="THEN">
              <block type="s4d_m_create_embed_then" id="};Ye.(\`#?*+:^gYxI8W5">
                <statement name="THEN">
                  <block type="s4d_m_create_embed_then_set_color" id="Q@}A;C)MnQfp4:~c.?D5">
                    <value name="COLOR">
                      <block type="colour_picker" id="+u!I_D4$x.#hj31x!_oJ">
                        <field name="COLOUR">#ff0000</field>
                      </block>
                    </value>
                    <next>
                      <block type="s4d_m_create_embed_then_set_title" id="^Zk=MI7NvdSF5iR;Pn*{">
                        <value name="TITLE">
                          <block type="text" id="[f~lL\`nzMGJbatj9,\`!M">
                            <field name="TEXT">Click here to go to the post</field>
                          </block>
                        </value>
                        <value name="URL">
                          <block type="post_Url" id="lTIUsS()PpN_!6VmIALN"></block>
                        </value>
                        <next>
                          <block type="s4d_m_create_embed_then_set_description" id="Dw(RZ[=quR*wEoN9E=mZ">
                            <value name="DESCRIPTION">
                              <block type="post_Title" id="|CVH3\`L;mkjU#jL]%NjR"></block>
                            </value>
                            <next>
                              <block type="s4d_m_create_embed_then_set_image" id=":~lQJXS6Vy~z7Hf)b7)Q">
                                <value name="IMAGE">
                                  <block type="post_Image" id=",_V;j)Zm_J|V_Pm#PB_M"></block>
                                </value>
                                <next>
                                  <block type="s4d_m_create_embed_then_send" id="BD)k5?R;7uVJ~r7iU)R=">
                                    <value name="CHANNEL">
                                      <block type="s4d_message_channel" id="?B?6A^%f.6WHAV?Oj=c@"></block>
                                    </value>
                                  </block>
                                </next>
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
</xml>
`;
export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="I*b*0O.\`b99|e1]#u*tB">member_unix</variable>
  </variables>
  <block type="s4d_login" id="B.nyBu?(;^qihO+NnN%N" x="0" y="0">
    <value name="TOKEN">
      <shadow type="text" id="0,3{jJrk+3IX+|8rBoO/">
        <field name="TEXT">Your bot token</field>
      </shadow>
    </value>
  </block>
  <block type="s4d_on_message" id=")todf5S$%tIsG,|HGW0+" x="0" y="104">
    <statement name="STATEMENTS">
      <block type="controls_if" id="34s+$!vr\`ERcQ)ESCuZ=">
        <value name="IF0">
          <block type="logic_negate" id="7.DwGeU9I.OA7*.b8+YT">
            <value name="BOOL">
              <block type="s4d_member_is_bot" id="K!G5JwAJkF(OmZ,@v9OU">
                <value name="MEMBER">
                  <block type="s4d_message_author" id="pRoeWA$9z4uGdEtL~GEp"></block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="controls_if" id="Uk$7U:brRPf%F6-76h^/">
            <value name="IF0">
              <block type="logic_negate" id="3tNsl^bG?6)Fu!-Z{aSp">
                <value name="BOOL">
                  <block type="s4d_has_data2" id="Idg%6%}Gl.$wS6l#v\`6h">
                    <value name="KEY">
                      <shadow type="text" id="0J1f)WY.k/cea^n!Lw5t">
                        <field name="TEXT">hello</field>
                      </shadow>
                      <block type="text_join" id="WXy1=Mt1~C2n7T-G)+Uv">
                        <mutation items="2"></mutation>
                        <value name="ADD0">
                          <block type="s4d_member_id" id="{Q;{~POURWpIqIfLuL-J">
                            <value name="MEMBER">
                              <block type="s4d_message_author" id="cB$7**nHx#Z.X5ziM0o~"></block>
                            </value>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="text" id="m2E}3wA(dqG*k]ft!!zx">
                            <field name="TEXT">-cooldown_test</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <statement name="DO0">
              <block type="s4d_set_data2" id="6nLgT7VIf*kHcvG4IC0D">
                <value name="KEY">
                  <shadow type="text" id="4N/Q{1]hd];3}TGU:qJS">
                    <field name="TEXT">hello</field>
                  </shadow>
                  <block type="text_join" id="^a8S(b+wJ*nl;$zE2ffb">
                    <mutation items="2"></mutation>
                    <value name="ADD0">
                      <block type="s4d_member_id" id="[{F,Ixfv.~({LrV_6vzU">
                        <value name="MEMBER">
                          <block type="s4d_message_author" id="%r6A6WwR@UN$*E2eOQMS"></block>
                        </value>
                      </block>
                    </value>
                    <value name="ADD1">
                      <block type="text" id="P0aW83~SvoS4Rx~@$}i_">
                        <field name="TEXT">-cooldown_test</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="VALUE">
                  <shadow type="text" id="O;q)\`HzC%Qx;GYH$\{,qi">
                    <field name="TEXT">world</field>
                  </shadow>
                  <block type="frost_current" id="ctd!0V^Yu/!;jl*-oP*M">
                    <field name="DATA_TYPE">UNIX</field>
                  </block>
                </value>
              </block>
            </statement>
            <next>
              <block type="variables_set" id="]4bNvCmTn]lqWSKw/QXi">
                <field name="VAR" id="I*b*0O.\`b99|e1]#u*tB">member_unix</field>
                <value name="VALUE">
                  <block type="s4d_get_data2" id="D]v35eEPy9_9YH8Of8{2">
                    <value name="KEY">
                      <shadow type="text" id="P^BRS*Wxd/-udIy{!}$*">
                        <field name="TEXT">hello</field>
                      </shadow>
                      <block type="text_join" id="[60asP}B-6K-G;:G+L,W">
                        <mutation items="2"></mutation>
                        <value name="ADD0">
                          <block type="s4d_member_id" id="RKLcX?y{pd~5g0F$zXBs">
                            <value name="MEMBER">
                              <block type="s4d_message_author" id="%BZmU,HHv5:;GTNU0=]K"></block>
                            </value>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="text" id="MyKt}q^17\`i[JH.FuJaf">
                            <field name="TEXT">-cooldown_test</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="controls_if" id="s@=Dpy$I0!ft9M2$+HRV">
                    <value name="IF0">
                      <block type="s4d_starts_with" id="KCs\`r++4?Nl~-E)2S?Fb">
                        <value name="STRING">
                          <shadow type="text" id="THCk7FWg\`7w3C?F;X#jq">
                            <field name="TEXT">abc</field>
                          </shadow>
                          <block type="text_changeCase" id="uY;PUIH_B~!Yx-cl[-Y/">
                            <field name="CASE">LOWERCASE</field>
                            <value name="TEXT">
                              <shadow type="text" id="*./}%30EUOYXyJ0y)Pt(">
                                <field name="TEXT">abc</field>
                              </shadow>
                              <block type="s4d_message_content" id="So5hudG3xPbyx-W,:!V\`"></block>
                            </value>
                          </block>
                        </value>
                        <value name="SUBSTRING">
                          <shadow type="text" id=")7@K.YcmTeV\`M6+B[(Z5">
                            <field name="TEXT">!test</field>
                          </shadow>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="controls_if" id="u4#{:+pQYIGy$~l$QDr\`">
                        <mutation else="1"></mutation>
                        <value name="IF0">
                          <block type="logic_compare" id="gyj_6jy:sh:CiY,PZ?U#">
                            <field name="OP">LTE</field>
                            <value name="A">
                              <block type="variables_get" id="%ORuc:O@:2u:=]-3fBu^">
                                <field name="VAR" id="I*b*0O.\`b99|e1]#u*tB">member_unix</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="frost_current" id=";#c_^tB-X)yLc8vp6,?J">
                                <field name="DATA_TYPE">UNIX</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="s4d_reply" id="^\`mJhti@/PxF7?lh+;L~">
                            <value name="CONTENT">
                              <shadow type="text" id="swWnjD+/fEW9mc{I{M#5">
                                <field name="TEXT">Done, you now can't use this command for 5 seconds</field>
                              </shadow>
                            </value>
                            <next>
                              <block type="s4d_set_data2" id="2#O?S[J]j3/.wJ0iRlj9">
                                <value name="KEY">
                                  <shadow type="text">
                                    <field name="TEXT">hello</field>
                                  </shadow>
                                  <block type="text_join" id="KYJ:a\`v|Frh?Y+1GX6Uc">
                                    <mutation items="2"></mutation>
                                    <value name="ADD0">
                                      <block type="s4d_member_id" id="mDUyfyWX|jEI^!uge?71">
                                        <value name="MEMBER">
                                          <block type="s4d_message_author" id=",32-4\`*1z8DV)b{M|Pgf"></block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="ADD1">
                                      <block type="text" id=")jbI(CYKfvG:zilw2BZ%">
                                        <field name="TEXT">-cooldown_test</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="VALUE">
                                  <shadow type="text" id="\`OaNnG]rt?wtPe?7bz,\`">
                                    <field name="TEXT">world</field>
                                  </shadow>
                                  <block type="math_arithmetic" id="}Mjj4925x=J0%,CF#/xS">
                                    <field name="OP">ADD</field>
                                    <value name="A">
                                      <shadow type="math_number" id="y|lZWAxz_qe)%GONz%C4">
                                        <field name="NUM">1</field>
                                      </shadow>
                                      <block type="frost_current" id="o+=_SHk%Fhg4#/d:f%Q!">
                                        <field name="DATA_TYPE">UNIX</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <shadow type="math_number" id="U)1Ef2T4z_35uO?_}ydE">
                                        <field name="NUM">5</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </next>
                          </block>
                        </statement>
                        <statement name="ELSE">
                          <block type="s4d_reply" id="X%X0)m(3@H3!zD:;3F9^">
                            <value name="CONTENT">
                              <shadow type="text" id="Qydk8#um.KmLu^UN3s/h">
                                <field name="TEXT">Done, you now can't use this command for 5 seconds</field>
                              </shadow>
                              <block type="text_join" id="5Hu/c1x2]v%[k^JZ#s%=">
                                <mutation items="3"></mutation>
                                <value name="ADD0">
                                  <block type="text" id="wD80jp^RXr/L3Sx+]Xh9">
                                    <field name="TEXT">You are on cooldown wait \`</field>
                                  </block>
                                </value>
                                <value name="ADD1">
                                  <block type="math_arithmetic" id="1/W46R/JXc9O~|D7(uWC">
                                    <field name="OP">MINUS</field>
                                    <value name="A">
                                      <shadow type="math_number" id="ODgq[Xdv2,TpWbkr$Y=H">
                                        <field name="NUM">1</field>
                                      </shadow>
                                      <block type="variables_get" id="J#KVX?FO[kQ0d3)#BOqu">
                                        <field name="VAR" id="I*b*0O.\`b99|e1]#u*tB">member_unix</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <shadow type="math_number" id="Af02a0YDZeV[a^8]-ovQ">
                                        <field name="NUM">1</field>
                                      </shadow>
                                      <block type="frost_current" id="LxXWK2,TBXcvCzq~wTmO">
                                        <field name="DATA_TYPE">UNIX</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="ADD2">
                                  <block type="text" id=";3wRe.^#-W6)Igyll:1p">
                                    <field name="TEXT">\` more seconds</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                          </block>
                        </statement>
                      </block>
                    </statement>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </statement>
  </block>
</xml>`;
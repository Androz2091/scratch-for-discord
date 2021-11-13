export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="OZ0l|^XRQH?T?s;b$B%X">arguments</variable>
    <variable id="dN-GQox{6nqmX%so5NT^">command</variable>
    <variable id="zwuB+1]K_6m-.pWE_6lt">option</variable>
  </variables>
  <block type="s4d_login" id="{|lO_b-0fA9\`}/b6#m6T" x="62" y="12">
    <value name="TOKEN">
      <block type="text" id="T3=]\`vNu7E~Pv%]r^%YC">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_message" id="+Q@qA4DZ.)H0dU~:qJFA" x="62" y="112">
    <statement name="STATEMENTS">
      <block type="variables_set" id="Fo+ksP#~73~o,EeQmq{u">
        <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
        <value name="VALUE">
          <block type="lists_split" id="1YzV9Eu2@GGwP5RREIIR">
            <mutation mode="SPLIT"></mutation>
            <field name="MODE">SPLIT</field>
            <value name="INPUT">
              <block type="text_changeCase" id="^u}:D=Bd#{f!mbv*Fd1@">
                <field name="CASE">LOWERCASE</field>
                <value name="TEXT">
                  <shadow type="text" id="~{%JPA9qI]u5A,Q:RS6.">
                    <field name="TEXT">abc</field>
                  </shadow>
                  <block type="s4d_message_content" id="q$LvJFktSA/VVK#4^z\`D"></block>
                </value>
              </block>
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
                        <field name="TEXT">-backup</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="controls_if" id="6-kZ4g]sr-??cJf9)NmA">
                    <mutation else="1"></mutation>
                    <value name="IF0">
                      <block type="s4d_member_has_permission" id="k{yy^]Q\`,_Kgt%VidN5[">
                        <field name="PERMISSION">ADMINISTRATOR</field>
                        <value name="MEMBER">
                          <block type="s4d_message_member" id="_?7Ei]8g~f;9QY;{KJGg"></block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="variables_set" id="pRR21Im(f;\`HhO}~RRMx">
                        <field name="VAR" id="zwuB+1]K_6m-.pWE_6lt">option</field>
                        <value name="VALUE">
                          <block type="lists_getIndex" id=".CzCcj9N(q-OXC-c|c]Y">
                            <mutation statement="false" at="true"></mutation>
                            <field name="MODE">GET_REMOVE</field>
                            <field name="WHERE">FROM_START</field>
                            <value name="VALUE">
                              <block type="variables_get" id="St$zYJhc$o6)HMWl;D]6">
                                <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                              </block>
                            </value>
                            <value name="AT">
                              <block type="math_number" id="8~E\`%2gNBRObcX/,|)VM">
                                <field name="NUM">1</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="controls_if" id="scZpuook{tA{Z1vfW4sT">
                            <mutation elseif="2" else="1"></mutation>
                            <value name="IF0">
                              <block type="logic_compare" id=";C(Cp85jW8*9U8:bq${`x`}">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="variables_get" id="B:RFBbF8Ka!16UAry4dw">
                                    <field name="VAR" id="zwuB+1]K_6m-.pWE_6lt">option</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text" id="_j$T)jZ#g0UY}J9=PV15">
                                    <field name="TEXT">create</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="s4d_send_wait_reply" id="y5pJ:IYmt(WQxe5fzhjr">
                                <value name="CONTENT">
                                  <shadow type="text" id="(KbEe:UR.i\`YCoO{NWP%">
                                    <field name="TEXT">What do you want to name your backup?</field>
                                  </shadow>
                                </value>
                                <value name="CHANNEL">
                                  <block type="s4d_message_channel" id="FQ)|X,$*gkRA%A?ZpckT"></block>
                                </value>
                                <value name="MEMBER">
                                  <block type="s4d_message_author" id="Pb0-MM(4Wh[5gh+)J9z^"></block>
                                </value>
                                <value name="TIME">
                                  <shadow type="math_number" id="ns1jKbw0UNW:VSK)KKzX">
                                    <field name="NUM">1</field>
                                  </shadow>
                                </value>
                                <statement name="THEN">
                                  <block type="controls_if" id="p|o.zlwe;12X*db-*i{V">
                                    <mutation else="1"></mutation>
                                    <value name="IF0">
                                      <block type="logic_negate" id="=4[1;_w~6~u3j0Uo*n\`5">
                                        <value name="BOOL">
                                          <block type="s4d_has_data" id="VRY1PqY~5U7s+ZJU|U!\`">
                                            <value name="KEY">
                                              <shadow type="text" id=";vN7csav*|OO{!Yz4Y*5">
                                                <field name="TEXT">hello</field>
                                              </shadow>
                                              <block type="text_changeCase" id="Pqnp*^B|\`hic}btQ#4K1">
                                                <field name="CASE">LOWERCASE</field>
                                                <value name="TEXT">
                                                  <shadow type="text" id="1zBNI1G2^nc!0p/{/|OC">
                                                    <field name="TEXT">abc</field>
                                                  </shadow>
                                                  <block type="text_join" id="Iq27RV!cg%fphjO#P@1u">
                                                    <mutation items="4"></mutation>
                                                    <value name="ADD0">
                                                      <block type="text" id="bADc\`WBsi]g*SRt:?4-|">
                                                        <field name="TEXT">bak-</field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD1">
                                                      <block type="s4d_message_guild_raw" id="QG5./15!Fr7G1llPv$Xx">
                                                        <field name="SEARCH_TYPE">ID</field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD2">
                                                      <block type="text" id="[(_S4}b4P49hK|tV}T)r">
                                                        <field name="TEXT">-</field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD3">
                                                      <block type="s4d_send_wait_reply_value" id="S*OH#GbJ*cycUP_tNYxA"></block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="s4d_reply_then" id="k(;u(6}{8M;Y8tz*{gLC">
                                        <value name="CONTENT">
                                          <block type="text" id="!I#Ap*9jEprBi!saU*]:">
                                            <field name="TEXT">**Saving Backup...**</field>
                                          </block>
                                        </value>
                                        <statement name="THEN">
                                          <block type="s4d_create_backup_of_guild_then" id="Z^J$m;(v:ptP1;oINXBA">
                                            <value name="GUILD">
                                              <block type="s4d_message_guild" id="6+fDHoEBMAp^*yAf2$qv"></block>
                                            </value>
                                            <statement name="THEN">
                                              <block type="s4d_set_data" id="eDM9FI},D9n^RQStR6O8">
                                                <value name="KEY">
                                                  <shadow type="text" id="mQvi=AZ/},eRCg$ufy*e">
                                                    <field name="TEXT">hello</field>
                                                  </shadow>
                                                  <block type="text_changeCase" id="3Xv?ku[7d@]^:CMPvm0.">
                                                    <field name="CASE">LOWERCASE</field>
                                                    <value name="TEXT">
                                                      <shadow type="text">
                                                        <field name="TEXT">abc</field>
                                                      </shadow>
                                                      <block type="text_join" id="p$m3]v-|)Nv#F7K7n7t!">
                                                        <mutation items="4"></mutation>
                                                        <value name="ADD0">
                                                          <block type="text" id="EU?{u-M$igwQs|g)f|5T">
                                                            <field name="TEXT">bak-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="s4d_message_guild_raw" id="5TBs;dIQ:/2tQ9y%K]d_">
                                                            <field name="SEARCH_TYPE">ID</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="text" id="cgc}LLCJpYK}YF5{baf)">
                                                            <field name="TEXT">-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="s4d_send_wait_reply_value" id="|xVN6:%j04SkmnS,%kLu"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="VALUE">
                                                  <shadow type="text" id="M!T{a6u,Zo3xJ))j#^3l">
                                                    <field name="TEXT">world</field>
                                                  </shadow>
                                                  <block type="s4d_backup_id" id="PWAOMFl0o#GC]klHa)Z="></block>
                                                </value>
                                                <next>
                                                  <block type="s4d_reply" id="s7h0,~-{p:t(9:*df6xX">
                                                    <value name="CONTENT">
                                                      <shadow type="text" id="#[T5\`1!\`wK3g5(?jMH^^">
                                                        <field name="TEXT">✅ **Backup saved!**</field>
                                                      </shadow>
                                                    </value>
                                                  </block>
                                                </next>
                                              </block>
                                            </statement>
                                          </block>
                                        </statement>
                                      </block>
                                    </statement>
                                    <statement name="ELSE">
                                      <block type="s4d_reply" id="R=lhp^fXPh+1[43p\`hvC">
                                        <value name="CONTENT">
                                          <shadow type="text" id="GP@wa*D9rtm~u%FNCD*3">
                                            <field name="TEXT">❌ **A backup with that name already exists**</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                              </block>
                            </statement>
                            <value name="IF1">
                              <block type="logic_compare" id="}qdBKyJv:*;[:EmODE{x">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="variables_get" id="i?ZhL?:tU0298=D}E13W">
                                    <field name="VAR" id="zwuB+1]K_6m-.pWE_6lt">option</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text" id=")IXK_]O+r)CyB3mO5u*K">
                                    <field name="TEXT">delete</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO1">
                              <block type="s4d_send_wait_reply" id="KA0m1h!VLarjJn2s,jRa">
                                <value name="CONTENT">
                                  <shadow type="text" id="QI.dr?Z[;=G$?IubxAdc">
                                    <field name="TEXT">What is the name of the backup to delete?</field>
                                  </shadow>
                                </value>
                                <value name="CHANNEL">
                                  <block type="s4d_message_channel" id="oiQpnQr9Rs.|TUw,IQzZ"></block>
                                </value>
                                <value name="MEMBER">
                                  <block type="s4d_message_author" id="_Ecp0-mnuO]Px*FXBe,m"></block>
                                </value>
                                <value name="TIME">
                                  <shadow type="math_number" id=";ji=!zA;,];?U@NlQ-^/">
                                    <field name="NUM">1</field>
                                  </shadow>
                                </value>
                                <statement name="THEN">
                                  <block type="controls_if" id="vsKVt^d=zipw-th#$qQf">
                                    <mutation else="1"></mutation>
                                    <value name="IF0">
                                      <block type="s4d_has_data" id="w9DjZ+7RbhGw/,[SZO1T">
                                        <value name="KEY">
                                          <shadow type="text">
                                            <field name="TEXT">hello</field>
                                          </shadow>
                                          <block type="text_changeCase" id="p8[]0RPz~ANaAfYv2Jq?">
                                            <field name="CASE">LOWERCASE</field>
                                            <value name="TEXT">
                                              <shadow type="text">
                                                <field name="TEXT">abc</field>
                                              </shadow>
                                              <block type="text_join" id="0AZ.JJ47k+9%m#7}[#R.">
                                                <mutation items="4"></mutation>
                                                <value name="ADD0">
                                                  <block type="text" id=")#g;Bt*l)KBd5aJtDf^d">
                                                    <field name="TEXT">bak-</field>
                                                  </block>
                                                </value>
                                                <value name="ADD1">
                                                  <block type="s4d_message_guild_raw" id="|nWRk(:aR}5.QvBjw/_7">
                                                    <field name="SEARCH_TYPE">ID</field>
                                                  </block>
                                                </value>
                                                <value name="ADD2">
                                                  <block type="text" id="iT{Q+^p=p+vZ|.MBEzU^">
                                                    <field name="TEXT">-</field>
                                                  </block>
                                                </value>
                                                <value name="ADD3">
                                                  <block type="s4d_send_wait_reply_value" id="\`f6-7QNYFp^viaV)nD7T"></block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="s4d_reply_then" id="c^5L.Zj=@R;5a+),?yn5">
                                        <value name="CONTENT">
                                          <block type="text" id="v^,;~J]op}z3TQy:=y}Z">
                                            <field name="TEXT">✅  **Deleting backup...**</field>
                                          </block>
                                        </value>
                                        <statement name="THEN">
                                          <block type="s4d_delete_backup" id="~9KqLNJ%~IwaWf|6jS5K">
                                            <value name="ID">
                                              <block type="s4d_get_data" id="nys9tXz*M,.=fq#g9n5)">
                                                <value name="KEY">
                                                  <shadow type="text" id="5Am,rQ}QQTWds+D?:9,-">
                                                    <field name="TEXT">hello</field>
                                                  </shadow>
                                                  <block type="text_changeCase" id="%-}j$Sa$N.(Q/3STaPhS">
                                                    <field name="CASE">LOWERCASE</field>
                                                    <value name="TEXT">
                                                      <shadow type="text">
                                                        <field name="TEXT">abc</field>
                                                      </shadow>
                                                      <block type="text_join" id="dei6PZBvbfB:VS2?yeKk">
                                                        <mutation items="4"></mutation>
                                                        <value name="ADD0">
                                                          <block type="text" id="C.X%NyA@gMh{dJ~mFL!l">
                                                            <field name="TEXT">bak-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="s4d_message_guild_raw" id="mPSYM1/Ve[l)a:NCW_Cw">
                                                            <field name="SEARCH_TYPE">ID</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="text" id="Er.N%qa#}{BI;wuTGG4q">
                                                            <field name="TEXT">-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="s4d_send_wait_reply_value" id="T$N=GvmqC%txGaoN8bi|"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="s4d_delete_data" id="5U0m,wyZpdSTMnGn*gG;">
                                                <value name="KEY">
                                                  <shadow type="text" id="S)c{$c5cYW7Sqh4Q!j=h">
                                                    <field name="TEXT">hello</field>
                                                  </shadow>
                                                  <block type="text_changeCase" id="zeGw@kP/hnNAJj@I:yI|">
                                                    <field name="CASE">LOWERCASE</field>
                                                    <value name="TEXT">
                                                      <shadow type="text">
                                                        <field name="TEXT">abc</field>
                                                      </shadow>
                                                      <block type="text_join" id="W;}vRnU*36xC=O;bW06;">
                                                        <mutation items="4"></mutation>
                                                        <value name="ADD0">
                                                          <block type="text" id="a?SMJ1CmH7/}3$LM61[p">
                                                            <field name="TEXT">bak-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="s4d_message_guild_raw" id="1vQ%_q(x}kU]=vp:ZB^/">
                                                            <field name="SEARCH_TYPE">ID</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="text" id="m=*AqVctPR(mcWmj?{Zn">
                                                            <field name="TEXT">-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="s4d_send_wait_reply_value" id="8)PqGBp}X2l:FRl+dn6I"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="s4d_reply" id="zJ%U]g;?rPK($#UaeE+5">
                                                    <value name="CONTENT">
                                                      <shadow type="text" id=";,:u-$hfj8o%I_WWniO0">
                                                        <field name="TEXT">✅ **Backup deleted**</field>
                                                      </shadow>
                                                    </value>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </statement>
                                      </block>
                                    </statement>
                                    <statement name="ELSE">
                                      <block type="s4d_reply" id="dvL{;L+OViLK6##h2WG+">
                                        <value name="CONTENT">
                                          <shadow type="text" id="Cx]AzYxQ!Ix-IjhunyD-">
                                            <field name="TEXT">❌ **A backup with that name does not exist**</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                              </block>
                            </statement>
                            <value name="IF2">
                              <block type="logic_compare" id="GQOr1:/fv4{EOr5NeSQq">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="variables_get" id="\`vHO*b}Q5$yoda={C#yT">
                                    <field name="VAR" id="zwuB+1]K_6m-.pWE_6lt">option</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text" id="o{_NLoHn:1AymL.,yuMK">
                                    <field name="TEXT">load</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO2">
                              <block type="s4d_send_wait_reply" id="anI~mjxDp|j6+XCmr}qh">
                                <value name="CONTENT">
                                  <shadow type="text" id="9wOF,yV5ulQ_@vqk#oiu">
                                    <field name="TEXT">What is the name of the backup to load?</field>
                                  </shadow>
                                </value>
                                <value name="CHANNEL">
                                  <block type="s4d_message_channel" id="jutk|oa{[Zab0N#uPqsh"></block>
                                </value>
                                <value name="MEMBER">
                                  <block type="s4d_message_author" id="Dt0\`S9Spo@qk\`=jMV:[N"></block>
                                </value>
                                <value name="TIME">
                                  <shadow type="math_number" id="Z3eU|4[)PH@HeleyAc4Q">
                                    <field name="NUM">1</field>
                                  </shadow>
                                </value>
                                <statement name="THEN">
                                  <block type="controls_if" id="y2BY-2Rz|A1RLOYlIdlk">
                                    <mutation else="1"></mutation>
                                    <value name="IF0">
                                      <block type="s4d_has_data" id="\`l]DW.Q:8zPI2l}}aDT1">
                                        <value name="KEY">
                                          <shadow type="text">
                                            <field name="TEXT">hello</field>
                                          </shadow>
                                          <block type="text_changeCase" id="(_F5V]ij:sT_2@3K;o!u">
                                            <field name="CASE">LOWERCASE</field>
                                            <value name="TEXT">
                                              <shadow type="text">
                                                <field name="TEXT">abc</field>
                                              </shadow>
                                              <block type="text_join" id="A4MYR+O[i[]]y}5Wg/Mf">
                                                <mutation items="4"></mutation>
                                                <value name="ADD0">
                                                  <block type="text" id="p7Q1x]1=k^F$)Vz0R~WA">
                                                    <field name="TEXT">bak-</field>
                                                  </block>
                                                </value>
                                                <value name="ADD1">
                                                  <block type="s4d_message_guild_raw" id="P)Rx%i*u+xJBlKYGnAAY">
                                                    <field name="SEARCH_TYPE">ID</field>
                                                  </block>
                                                </value>
                                                <value name="ADD2">
                                                  <block type="text" id="oG@mOE?8^Y_SU~3oP{wg">
                                                    <field name="TEXT">-</field>
                                                  </block>
                                                </value>
                                                <value name="ADD3">
                                                  <block type="s4d_send_wait_reply_value" id="MoXmC@x0h[?e%YgDb13}"></block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="s4d_reply_then" id="2[Dtlu*kFpm:5/=+bCA.">
                                        <value name="CONTENT">
                                          <block type="text" id="~l5X(S.dBR^2{j}^T!BC">
                                            <field name="TEXT">✅  **Backup loading...**</field>
                                          </block>
                                        </value>
                                        <statement name="THEN">
                                          <block type="s4d_backup_load" id="|I!zXyEC^z58Dq}7k-;Z">
                                            <value name="GUILD">
                                              <block type="s4d_message_guild" id="T%1Ik#u=8nC*_91:.=Bt"></block>
                                            </value>
                                            <value name="ID">
                                              <block type="s4d_get_data" id="-Nt0en_S#5%A9}9j8dGa">
                                                <value name="KEY">
                                                  <shadow type="text">
                                                    <field name="TEXT">hello</field>
                                                  </shadow>
                                                  <block type="text_changeCase" id="W;n{nWh\`84?,+-W%iu~=">
                                                    <field name="CASE">LOWERCASE</field>
                                                    <value name="TEXT">
                                                      <shadow type="text">
                                                        <field name="TEXT">abc</field>
                                                      </shadow>
                                                      <block type="text_join" id="L4pghSK$l-gGr+4EsI[(">
                                                        <mutation items="4"></mutation>
                                                        <value name="ADD0">
                                                          <block type="text" id="/Qt9U^VoN/-Ki7@}g(:*">
                                                            <field name="TEXT">bak-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="s4d_message_guild_raw" id="=]i))?Lu;MT;j)K!5!-\`">
                                                            <field name="SEARCH_TYPE">ID</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="text" id="aaCeCX\`|uK)aHMm}apJt">
                                                            <field name="TEXT">-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="s4d_send_wait_reply_value" id="ibBxDMKUnY\`qzBN{wMu["></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="BUTTONS">
                                              <block type="s4d_reply" id="hUcZ!qgayL7uyB!TG+8K">
                                                <value name="CONTENT">
                                                  <shadow type="text" id="{@\`][Fr]I2hG!?DP*%^E">
                                                    <field name="TEXT">✅  **Backup loaded**</field>
                                                  </shadow>
                                                </value>
                                              </block>
                                            </statement>
                                          </block>
                                        </statement>
                                      </block>
                                    </statement>
                                    <statement name="ELSE">
                                      <block type="s4d_reply" id="j$B.[WQUcQqb=hGiv9AS">
                                        <value name="CONTENT">
                                          <shadow type="text" id="zk{*I)NFu?w?-Mn/eM=N">
                                            <field name="TEXT">❌ **A backup with that name does not exist**</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                              </block>
                            </statement>
                            <statement name="ELSE">
                              <block type="s4d_reply" id="BVT:#LaeT50eiqEZN~ex">
                                <value name="CONTENT">
                                  <shadow type="text" id="fU!CjA-V7nEaX*fF@A$}">
                                    <field name="TEXT">❌ **You need to send \`create\`, \`delete\`, or \`load\`**</field>
                                  </shadow>
                                </value>
                              </block>
                            </statement>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <statement name="ELSE">
                      <block type="s4d_reply" id="hKAj.PsC9-4M{~PQ9brk">
                        <value name="CONTENT">
                          <shadow type="text" id="c+)#5Zus^x$%WT88Z+ke">
                            <field name="TEXT">❌ **You need permission \`adminsitrator\` for that command**</field>
                          </shadow>
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
</xml>
`;
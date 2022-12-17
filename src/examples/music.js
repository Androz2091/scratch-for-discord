export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="OZ0l|^XRQH?T?s;b$B%X">arguments</variable>
    <variable id="dN-GQox{6nqmX%so5NT^">command</variable>
    <variable id="{sUGJ(yKN[lJQV8zirk3">volume</variable>
    <variable id="-3h|hvM5S2x_ir5)h(b!">onoff</variable>
  </variables>
  <block type="s4d_track_playing" id="CGfYiZ#~u\`i:l8x$*vdH" x="-1834" y="-423">
    <statement name="STATEMENTS">
      <block type="s4d_create_embed_then" id="6wSAj/orcXjru(7iQA3k">
        <statement name="THEN">
          <block type="s4d_create_embed_then_set_title" id="r$!Lrrl6Ohy^oF%3BFP?">
            <value name="TITLE">
              <block type="text_join" id="j4:]=$m0ybA:~hWl(|h8">
                <mutation items="14"></mutation>
                <value name="ADD0">
                  <block type="text" id="js;Ay;79b,KX^]SXB!Rm">
                    <field name="TEXT">now playing </field>
                  </block>
                </value>
                <value name="ADD1">
                  <block type="s4d_track_name" id=",4F]}9r$W]vB!OlI%7%2"></block>
                </value>
                <value name="ADD2">
                  <block type="s4d_newline" id="h740De$0!+z1Wn5|ee+g"></block>
                </value>
                <value name="ADD3">
                  <block type="text" id="V\`5}XXw@_b+hkg,]13N$">
                    <field name="TEXT">author: </field>
                  </block>
                </value>
                <value name="ADD4">
                  <block type="s4d_track_author" id="eg$R54GB5pN]SjT3y6+x"></block>
                </value>
                <value name="ADD5">
                  <block type="s4d_newline" id="iJ\`sRFCzbtku-Tx_=5.X"></block>
                </value>
                <value name="ADD6">
                  <block type="text" id="v:586=}VuW\`Vv,)nHAJc">
                    <field name="TEXT">url: </field>
                  </block>
                </value>
                <value name="ADD7">
                  <block type="s4d_track_url" id="H1s8:KFoL+4]nqh#W?D]"></block>
                </value>
                <value name="ADD8">
                  <block type="s4d_newline" id="VgwMMovdM#0yH).ZGA(y"></block>
                </value>
                <value name="ADD9">
                  <block type="text" id="6q}sk3XSS)W13;?Eo~Gj">
                    <field name="TEXT">views: </field>
                  </block>
                </value>
                <value name="ADD10">
                  <block type="s4d_track_views" id="NSq(XOL*9,tSF.FPcjFa"></block>
                </value>
                <value name="ADD11">
                  <block type="s4d_newline" id="gdzzW.sy]gT:L:)H)DFU"></block>
                </value>
                <value name="ADD12">
                  <block type="text" id="Z5nX2QE3+P!Ak6l]tr]^">
                    <field name="TEXT">duration: </field>
                  </block>
                </value>
                <value name="ADD13">
                  <block type="s4d_track_duration" id="-MRZ#cZHyJ5fOEzte5f."></block>
                </value>
              </block>
            </value>
            <next>
              <block type="s4d_create_embed_then_set_image" id="7qaIRg#wlPKI#=RwO;yg">
                <value name="IMAGE">
                  <block type="s4d_track_thumbnail" id="W;l{#b6Z}!6UK0@aZ%x$"></block>
                </value>
                <next>
                  <block type="s4d_create_embed_then_send" id="!+~A8j%tc;+Y(F}u!m-)">
                    <value name="CHANNEL">
                      <block type="s4d_track_channel" id="XIj-J1S5Zv]mz!,QC.bl"></block>
                    </value>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </statement>
  </block>
  <block type="s4d_queue_finished" id=")/Ys@}bZ7cK@M#wO.1@N" x="-1149" y="-118">
    <statement name="STATEMENTS">
      <block type="s4d_send_channel" id="?jkh4QU_1uu:DLfnAJ_g">
        <value name="CONTENT">
          <block type="text" id="%/Rw+2OA0f[pc(e|FZNo">
            <field name="TEXT">queue finished</field>
          </block>
        </value>
        <value name="CHANNEL">
          <block type="s4d_track_channel" id="lh[|x%V+|z*gVLSpj^s-"></block>
        </value>
      </block>
    </statement>
  </block>
  <block type="s4d_track_added" id="6/j,zd)jj+OD4-k}x0dz" x="-594" y="-119">
    <statement name="STATEMENTS">
      <block type="s4d_send_channel" id="#v@)[Utm;?b!|H4$GahX">
        <value name="CONTENT">
          <block type="text_join" id="=b%!$_fx/tw)p,\`lggKF">
            <mutation items="3"></mutation>
            <value name="ADD0">
              <block type="text" id="}xkt\`;qTFgN]oOiUZm.4">
                <field name="TEXT">music </field>
              </block>
            </value>
            <value name="ADD1">
              <block type="s4d_track_name" id="A/hq3p3kZX(7.B!r0$,B"></block>
            </value>
            <value name="ADD2">
              <block type="text" id="6kMK^a5xN2Y_6W$fHb?@">
                <field name="TEXT">added to queue</field>
              </block>
            </value>
          </block>
        </value>
        <value name="CHANNEL">
          <block type="s4d_track_channel" id="6|15AQ;qFcO@K2(Woc2B"></block>
        </value>
      </block>
    </statement>
  </block>
  <block type="s4d_login" id="CV]Hlty^^qPAwui3Bv/F" x="4" y="-60">
    <value name="TOKEN">
      <block type="text" id="GG@{:c*8,?Y3Gu1x^v!_">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_message" id="+Q@qA4DZ.)H0dU~:qJFA" x="82" y="151">
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
                        <field name="TEXT">!play</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="controls_if" id="uaXKCnfi;^HsR?Rvwt~f">
                    <value name="IF0">
                      <block type="logic_compare" id="Vx8]8ixxdXo4n-Nz%U19">
                        <field name="OP">EQ</field>
                        <value name="A">
                          <block type="s4d_voice_channel_id" id="!7,@XxY5vdla1Ec@A]ac"></block>
                        </value>
                        <value name="B">
                          <block type="logic_null" id="D*/Xvp9Wwk3b^GmKf1_1"></block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="s4d_reply" id="P?5,ZO)mciBG50tj$_k2">
                        <value name="CONTENT">
                          <shadow type="text" id="P3Yn5_{o)I$WcA!XP19C">
                            <field name="TEXT">you are not in a voice channel!</field>
                          </shadow>
                        </value>
                        <next>
                          <block type="s4d_return" id="nUuK,5UoCIKvV@I}x0,S"></block>
                        </next>
                      </block>
                    </statement>
                    <next>
                      <block type="controls_if" id="7/\`T[r=k9llWLyA:()VU">
                        <value name="IF0">
                          <block type="logic_operation" id="S[R5H83KT_M^q,hmKlhd">
                            <field name="OP">AND</field>
                            <value name="A">
                              <block type="logic_compare" id="T:w+^VO-eiH%@\`L=6]5.">
                                <field name="OP">NEQ</field>
                                <value name="A">
                                  <block type="s4d_bot_voice_channel" id="\`-m{l!Kkb=Mn6aK77i]U"></block>
                                </value>
                                <value name="B">
                                  <block type="logic_null" id="[hNuG+kPeuqbW?j/(~dW"></block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="logic_compare" id="@arnPOmvb*|sakw%oVb9">
                                <field name="OP">NEQ</field>
                                <value name="A">
                                  <block type="s4d_voice_channel_id" id="ysn^,M|;\`Y4gl88C3-5V"></block>
                                </value>
                                <value name="B">
                                  <block type="s4d_bot_voice_channel" id="/jn]w,#DGTb\`_nPvk6;H"></block>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="s4d_reply" id="N[6?=6oI$,V21K-nk/#K">
                            <value name="CONTENT">
                              <shadow type="text" id="xK8}4TJ!(1ICW3#+thzg">
                                <field name="TEXT">you are not in my voice channel!</field>
                              </shadow>
                            </value>
                            <next>
                              <block type="s4d_return" id="lg{321f%^}R07oZ#YpZ\`"></block>
                            </next>
                          </block>
                        </statement>
                        <next>
                          <block type="s4d_create_queue" id="SA+i(cq-mBqH3RO:Zi4{">
                            <value name="GUILD">
                              <block type="s4d_message_guild" id="S6yIH,dr@{gD|Uz$t~cF"></block>
                            </value>
                            <value name="CHANNEL">
                              <block type="s4d_message_channel" id="B?xnk9OSp2W!l=Y;!rim"></block>
                            </value>
                            <next>
                              <block type="controls_if" id="7ZmKu6?:dI+]zSs}0AI2">
                                <value name="IF0">
                                  <block type="logic_negate" id="MgU4zi~Cj}dV\`Wj:n(ie">
                                    <value name="BOOL">
                                      <block type="s4d_connected" id="Z!wUS.ZJ0;LWMltowbiV"></block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_connect" id="|-2rmo]FK@5]$!2U-{A=">
                                    <value name="VOICECHANNEL">
                                      <block type="s4d_voice_channel" id="g0bp+PhtD%/q+-@Vr?J^"></block>
                                    </value>
                                  </block>
                                </statement>
                                <next>
                                  <block type="s4d_play" id="6LVtK+Y/!Fa7@I.:q8u,">
                                    <value name="SEARCH">
                                      <block type="s4d_search" id="fM@(p)Jke(u0tlszJY8~">
                                        <value name="STRING">
                                          <block type="lists_split" id="(*UCFr~Gr~1TK;UT?=C#">
                                            <mutation mode="JOIN"></mutation>
                                            <field name="MODE">JOIN</field>
                                            <value name="INPUT">
                                              <block type="variables_get" id="]s%5i)l,FWlZCuah~ysA">
                                                <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                              </block>
                                            </value>
                                            <value name="DELIM">
                                              <shadow type="text" id="nJ0:W}_v|#L$=g~Qh9vB">
                                                <field name="TEXT"> </field>
                                              </shadow>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="MEMBER">
                                          <block type="s4d_message_author" id="#uUhZn@\`s=xzTQw(eb!]"></block>
                                        </value>
                                      </block>
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
                <next>
                  <block type="controls_if" id="X]wZ9ZPRE.izHU+Lo4\`*">
                    <value name="IF0">
                      <block type="logic_compare" id="oLF?g,W~@vOL+\`\`M3QqD">
                        <field name="OP">EQ</field>
                        <value name="A">
                          <block type="variables_get" id="yr|c++WoB\`f7UwlEDq0e">
                            <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="text" id="0kl7\`T.YjBbQf7+8j}g~">
                            <field name="TEXT">!pause</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="controls_if" id="\`WyiPD~f_P7+zN[q\`Gkg">
                        <value name="IF0">
                          <block type="logic_compare" id="T}!nO8Y(k68_9zRIE^qr">
                            <field name="OP">EQ</field>
                            <value name="A">
                              <block type="s4d_voice_channel" id=";+YaUG:BAE?NzQc{{JEs"></block>
                            </value>
                            <value name="B">
                              <block type="logic_null" id="31^;QfiO@c=A*43bTGCB"></block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="s4d_reply" id="qabb:6%zuP_rRN3kB|SR">
                            <value name="CONTENT">
                              <shadow type="text" id="2n9Fj)^uG:z}t{tN~ni~">
                                <field name="TEXT">you are not in a voice channel!</field>
                              </shadow>
                            </value>
                            <next>
                              <block type="s4d_return" id="h.qFVz#f#,Gie7X.i.Q7"></block>
                            </next>
                          </block>
                        </statement>
                        <next>
                          <block type="controls_if" id="?voNr~!g(;hcG,;vf?nH">
                            <value name="IF0">
                              <block type="logic_compare" id="fYGTv5m0ot^8\`H$Hi)Bn">
                                <field name="OP">NEQ</field>
                                <value name="A">
                                  <block type="s4d_voice_channel_id" id="_OYbRxjWrhuvF/xj$_$z"></block>
                                </value>
                                <value name="B">
                                  <block type="s4d_bot_voice_channel" id="ze)|F~*^XmHIx;^yP.{c"></block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="s4d_reply" id="H]a+QX{J.%t_%Btdd_9n">
                                <value name="CONTENT">
                                  <shadow type="text" id="s,apxX^Ar*o}xxo(N/wY">
                                    <field name="TEXT">you are not in my voice channel!</field>
                                  </shadow>
                                </value>
                                <next>
                                  <block type="s4d_return" id="GNy|-m\`D]CH2[dfJfO9_"></block>
                                </next>
                              </block>
                            </statement>
                            <next>
                              <block type="controls_if" id="I:5T%n~Bm_eT)~qSg_L;">
                                <value name="IF0">
                                  <block type="logic_negate" id="A|-k[WQL1M$I{Q)9Y5w_">
                                    <value name="BOOL">
                                      <block type="s4d_playing" id="jO@RZGB,n3rM.Un(wNC9">
                                        <value name="QUEUE">
                                          <block type="s4d_get_queue" id="}-2+mW)2}K-2$Zp3]H9f">
                                            <value name="SERVER">
                                              <block type="s4d_message_guild" id="[a(v1#o{r/.mr8K*Jw9H"></block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_reply" id="M{p{3^2/jOo0yJ1dFUnh">
                                    <value name="CONTENT">
                                      <shadow type="text" id="9Dlw,~foRXA[lF%UcT!n">
                                        <field name="TEXT">there is no music playing!</field>
                                      </shadow>
                                    </value>
                                    <next>
                                      <block type="s4d_return" id="nNo63NFWV7;q5A1dU^{!"></block>
                                    </next>
                                  </block>
                                </statement>
                                <next>
                                  <block type="s4d_pause" id="fB;r?PmA!q1k0;};1Bqi">
                                    <value name="QUEUE">
                                      <block type="s4d_get_queue" id="}{KzPd:El(smgtD;)!0)">
                                        <value name="SERVER">
                                          <block type="s4d_message_guild" id="_ns[GBgY]qeF26ZgP;0Y"></block>
                                        </value>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="s4d_reply" id="360flMK{!ik#XaOQ7?2R">
                                        <value name="CONTENT">
                                          <shadow type="text" id="Wxs(U2f_]O?rBnStZ,$6">
                                            <field name="TEXT">paused music</field>
                                          </shadow>
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
                    <next>
                      <block type="controls_if" id="JR1D6I3-p1u|$qnblaf?">
                        <value name="IF0">
                          <block type="logic_compare" id="wL~|{v$:X*a|e^thxbO,">
                            <field name="OP">EQ</field>
                            <value name="A">
                              <block type="variables_get" id="jyf#7HGP:I/;/k|9VYRd">
                                <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="text" id="6?gsZS\`qg}=Vxr~Uu/}$">
                                <field name="TEXT">!resume</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="controls_if" id="5DQIQd-6T87IWFV)rs(\`">
                            <value name="IF0">
                              <block type="logic_compare" id="GSizuK.j%!9!On11p[O4">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="s4d_voice_channel" id="_xs^YCs^9rG*h#J]DbPE"></block>
                                </value>
                                <value name="B">
                                  <block type="logic_null" id="b$NPi-4*!uI1iY:qnBv$"></block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="s4d_reply" id="PEx[\`BLqMb|Imzm_xS@b">
                                <value name="CONTENT">
                                  <shadow type="text" id="?ggBs-XoB]L1Pd/-DSX4">
                                    <field name="TEXT">you are not in a voice channel!</field>
                                  </shadow>
                                </value>
                                <next>
                                  <block type="s4d_return" id="9T?|m8f3hP)w;[SS?(Et"></block>
                                </next>
                              </block>
                            </statement>
                            <next>
                              <block type="controls_if" id="|Wmzk1AG^iGve({p|$?3">
                                <value name="IF0">
                                  <block type="logic_compare" id="Y6HnBX4=lx!$G%Q^jc8,">
                                    <field name="OP">NEQ</field>
                                    <value name="A">
                                      <block type="s4d_voice_channel_id" id="!=huQxdUwT+V5)t,))){"></block>
                                    </value>
                                    <value name="B">
                                      <block type="s4d_bot_voice_channel" id="/k8j_\`)0@2+u8LL}pl5R"></block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_reply" id="[uv5HlVRvWPR\`HM\`?Mh.">
                                    <value name="CONTENT">
                                      <shadow type="text" id="iaNEvp8ijkC!|9j%w_2K">
                                        <field name="TEXT">you are not in my voice channel!</field>
                                      </shadow>
                                    </value>
                                    <next>
                                      <block type="s4d_return" id=";gbR;Di+|[T)|Z{2AR_K"></block>
                                    </next>
                                  </block>
                                </statement>
                                <next>
                                  <block type="controls_if" id="*KlP*$Sfz/~vH]Qs:Aem">
                                    <value name="IF0">
                                      <block type="logic_negate" id="I%s{2ZOsrW@OC$2]cKel">
                                        <value name="BOOL">
                                          <block type="s4d_playing" id="[Ru-^E)~j6Qovs0Wa%0,">
                                            <value name="QUEUE">
                                              <block type="s4d_get_queue" id="$PfpTvz_rgL?+R*,%;1a">
                                                <value name="SERVER">
                                                  <block type="s4d_message_guild" id="UJHo+4aD+lm[V/$2I~{1"></block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="s4d_reply" id="[N;a%!Wg1NU|dP{@_s;,">
                                        <value name="CONTENT">
                                          <shadow type="text" id="_KYDW}/EZ?Y.afJK@,[2">
                                            <field name="TEXT">there is no music playing!</field>
                                          </shadow>
                                        </value>
                                        <next>
                                          <block type="s4d_return" id="(=5rAcg6xOgGatV/HQ3Q"></block>
                                        </next>
                                      </block>
                                    </statement>
                                    <next>
                                      <block type="s4d_resume" id="vei/zqd)6A^6Wy8E6Y,]">
                                        <value name="QUEUE">
                                          <block type="s4d_get_queue" id="V.FJOR/PypE6J.|:Y(9R">
                                            <value name="SERVER">
                                              <block type="s4d_message_guild" id="#e1*xrrr$MtS|2wZ~o.f"></block>
                                            </value>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="s4d_reply" id="KJn]Bz,\`5;b(DNNGR#u:">
                                            <value name="CONTENT">
                                              <shadow type="text" id="dvzWPG0[8fDM5O;R)#r7">
                                                <field name="TEXT">resumed the music</field>
                                              </shadow>
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
                        <next>
                          <block type="controls_if" id="XP,q:H$jGVkLKhta.Qzu">
                            <value name="IF0">
                              <block type="logic_compare" id="xbLJTNm!;pkm/o_F1.1x">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="variables_get" id=":g%IHXF91dyq%X/_)N~m">
                                    <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text" id="5b~bg|pR5/4%tY(WQMkN">
                                    <field name="TEXT">!stop</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="controls_if" id="SlkOjluePMkALWH=^VpV">
                                <value name="IF0">
                                  <block type="logic_compare" id="t#)VD.vzebHY)o]+;?iP">
                                    <field name="OP">EQ</field>
                                    <value name="A">
                                      <block type="s4d_voice_channel" id="*6!n,WhSlxe2_w_(u-,M"></block>
                                    </value>
                                    <value name="B">
                                      <block type="logic_null" id="vls8s)ov.{m5N}(sqU[)"></block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_reply" id="Jji)OhGDqE8G]~-k|cHz">
                                    <value name="CONTENT">
                                      <shadow type="text" id="JU{_E_Wsg/(:N#C7*EHx">
                                        <field name="TEXT">you are not in a voice channel!</field>
                                      </shadow>
                                    </value>
                                    <next>
                                      <block type="s4d_return" id="j)D+DlNv~qBV:6g0-3#U"></block>
                                    </next>
                                  </block>
                                </statement>
                                <next>
                                  <block type="controls_if" id="}YH3R~/y-dX^dd}}FS_a">
                                    <value name="IF0">
                                      <block type="logic_compare" id="gGwIv9u%Nqcy=/sBE84t">
                                        <field name="OP">NEQ</field>
                                        <value name="A">
                                          <block type="s4d_voice_channel_id" id="Ej_@|f|JEnns[\`+iRld|"></block>
                                        </value>
                                        <value name="B">
                                          <block type="s4d_bot_voice_channel" id="\`bc!LlOT22z;*~h[V+8r"></block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="s4d_reply" id=";~3:KqjE@1ZO(ae[yry9">
                                        <value name="CONTENT">
                                          <shadow type="text" id="bIn\`moEkZJGr?hq)2;\`f">
                                            <field name="TEXT">you are not in my voice channel!</field>
                                          </shadow>
                                        </value>
                                        <next>
                                          <block type="s4d_return" id="X0T-_Pg9*xnkigY=p%96"></block>
                                        </next>
                                      </block>
                                    </statement>
                                    <next>
                                      <block type="controls_if" id="qLp:W,O!4;k33@%dTG.6">
                                        <value name="IF0">
                                          <block type="logic_negate" id="?ES5/dX:|M_@w74^%p,(">
                                            <value name="BOOL">
                                              <block type="s4d_playing" id="u!.yp.)gYJ4R?/=SKji1">
                                                <value name="QUEUE">
                                                  <block type="s4d_get_queue" id="B5?y(]KKLXQb$5$^mY9?">
                                                    <value name="SERVER">
                                                      <block type="s4d_message_guild" id="SqfCc5gH31G(F7KJ$#Js"></block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="s4d_reply" id="@DIG2jo*To0*;lRJ\`HXd">
                                            <value name="CONTENT">
                                              <shadow type="text" id="ETtZb#4pmbTX1hDi(KZ0">
                                                <field name="TEXT">there is no music playing!</field>
                                              </shadow>
                                            </value>
                                            <next>
                                              <block type="s4d_return" id="bv_t;rR^Rd?{YdGs\`e]l"></block>
                                            </next>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="s4d_stop" id="j$6~5T%$vxf{[wKl\`/c[">
                                            <value name="QUEUE">
                                              <block type="s4d_get_queue" id="uN_ZAJ-)(k9J7|?)](+4">
                                                <value name="SERVER">
                                                  <block type="s4d_message_guild" id="M}q]=]abn?lf9hVcZELy"></block>
                                                </value>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="s4d_reply" id="Hko0+^qJ{78h./dbEark">
                                                <value name="CONTENT">
                                                  <shadow type="text" id="S|C^Uqnx[3,Jot,Z|.n+">
                                                    <field name="TEXT">stoped music</field>
                                                  </shadow>
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
                            <next>
                              <block type="controls_if" id="Vam6[i48@StLD|X=vb|w">
                                <value name="IF0">
                                  <block type="logic_compare" id=")^%,NNXcGdd-u($2flY?">
                                    <field name="OP">EQ</field>
                                    <value name="A">
                                      <block type="variables_get" id="Vo\`x_MF;k[/6tp~R!q5Z">
                                        <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="text" id="F\`6b|qjhN!BT+8\`;7Yyf">
                                        <field name="TEXT">!volume</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="variables_set" id="^UVR;qz:Se9_2fxeI1}n">
                                    <field name="VAR" id="{sUGJ(yKN[lJQV8zirk3">volume</field>
                                    <value name="VALUE">
                                      <block type="lists_getIndex" id=";!hw*K5!-%/syn9|h%s~">
                                        <mutation statement="false" at="true"></mutation>
                                        <field name="MODE">GET</field>
                                        <field name="WHERE">FROM_START</field>
                                        <value name="VALUE">
                                          <block type="variables_get" id="9RN731.b]IP,,(hZ6B8T">
                                            <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                          </block>
                                        </value>
                                        <value name="AT">
                                          <block type="math_number" id="[N{]cvQ#HZ_s!QMuz^#g">
                                            <field name="NUM">1</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="controls_if" id="x+M7b=,iZjY+3yJZ]i/?">
                                        <value name="IF0">
                                          <block type="logic_compare" id="1H[(,gq!_;TAQ?^*ThLA">
                                            <field name="OP">EQ</field>
                                            <value name="A">
                                              <block type="s4d_voice_channel" id="!hjKX/dYH?@vi5Sv_uWn"></block>
                                            </value>
                                            <value name="B">
                                              <block type="logic_null" id="KcK!==-Y7bBGn?I^Z$6,"></block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="s4d_reply" id="R2QkI45hM:W=a,$.?i|2">
                                            <value name="CONTENT">
                                              <shadow type="text" id="~7Il6nQzYush~yW)y9)X">
                                                <field name="TEXT">you are not in a voice channel!</field>
                                              </shadow>
                                            </value>
                                            <next>
                                              <block type="s4d_return" id="WIRqA#Ag*BuZ^C3Ih_HU"></block>
                                            </next>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="controls_if" id="y07ALp2KH;wFesRI2E]M">
                                            <value name="IF0">
                                              <block type="logic_compare" id="r|;BQ,^+4G=^-lsWi=6D">
                                                <field name="OP">NEQ</field>
                                                <value name="A">
                                                  <block type="s4d_voice_channel_id" id="]y*U@Yk{oKrQ=X0Fs[f:"></block>
                                                </value>
                                                <value name="B">
                                                  <block type="s4d_bot_voice_channel" id="|EYI6/7/0S9fW/#~_*te"></block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="DO0">
                                              <block type="s4d_reply" id="GwIgx}PF]-K;3}a[vz{q">
                                                <value name="CONTENT">
                                                  <shadow type="text" id="HPsy|KFU([rO*o,\`C7W\`">
                                                    <field name="TEXT">you are not in my voice channel!</field>
                                                  </shadow>
                                                </value>
                                                <next>
                                                  <block type="s4d_return" id="xPSngf/Mj_g@R\`*.@+CF"></block>
                                                </next>
                                              </block>
                                            </statement>
                                            <next>
                                              <block type="controls_if" id="A^.9Od3E*c)/#I}ihIg1">
                                                <value name="IF0">
                                                  <block type="logic_negate" id="A3#8))yx+@;vPx2{4UYh">
                                                    <value name="BOOL">
                                                      <block type="s4d_playing" id="HHH~M]|E!7OcQ|HT4jO]">
                                                        <value name="QUEUE">
                                                          <block type="s4d_get_queue" id="Iv!i^w)(_3B?eR#=Mk0(">
                                                            <value name="SERVER">
                                                              <block type="s4d_message_guild" id="._KT#Ii!2%gt_$MSe6{d"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO0">
                                                  <block type="s4d_reply" id="1M8dlD$LRG42=qx6bTzQ">
                                                    <value name="CONTENT">
                                                      <shadow type="text" id="3(=c%troK0v=?Jrfu$bS">
                                                        <field name="TEXT">there is no music playing!</field>
                                                      </shadow>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_return" id="jOXDe5T.915et7J_^1fZ"></block>
                                                    </next>
                                                  </block>
                                                </statement>
                                                <next>
                                                  <block type="controls_if" id="5QXpT]n.USgu4thWPn*l">
                                                    <value name="IF0">
                                                      <block type="logic_compare" id="\`lM+G{$ywvlaX/:RD8{~">
                                                        <field name="OP">LT</field>
                                                        <value name="A">
                                                          <block type="s4d_string_to_number" id="}XcOR),,]EZSHx]lJ#zT">
                                                            <value name="STRING">
                                                              <block type="variables_get" id="?,%7/BR{s[$#Z?jp3I{p">
                                                                <field name="VAR" id="{sUGJ(yKN[lJQV8zirk3">volume</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="math_number" id="98?J;RSTTgzsVHyZupx2">
                                                            <field name="NUM">0</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="s4d_reply" id="N/,lgI=V5?U]U=sCzyi1">
                                                        <value name="CONTENT">
                                                          <shadow type="text" id="Y%Fu75-nC$]H2;eU5!-k">
                                                            <field name="TEXT">the volume need to be more then 0!</field>
                                                          </shadow>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_return" id="1iofOdU.6G@Z{(X{ZKz:"></block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="controls_if" id="+cT;HqZPjS\`hR~+ys2:4">
                                                        <value name="IF0">
                                                          <block type="logic_compare" id="@QOWl#~coUa)lLd+,2wG">
                                                            <field name="OP">GT</field>
                                                            <value name="A">
                                                              <block type="s4d_string_to_number" id="lfD{:]DsS3%pS(UJ=?SE">
                                                                <value name="STRING">
                                                                  <block type="variables_get" id="g08FwweJf\`=7CqM0QrM}">
                                                                    <field name="VAR" id="{sUGJ(yKN[lJQV8zirk3">volume</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="math_number" id="dYVSI$X{SIkh{mtu}v[W">
                                                                <field name="NUM">100</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <statement name="DO0">
                                                          <block type="s4d_reply" id="e,Io4;7*:8uKA~Jyh{uZ">
                                                            <value name="CONTENT">
                                                              <shadow type="text" id=".MqYA(ADwD~P)MB.\`h=)">
                                                                <field name="TEXT">the volume need to be less then 100!</field>
                                                              </shadow>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_return" id=",MO9Skb-\`WBBEB^$+EEP"></block>
                                                            </next>
                                                          </block>
                                                        </statement>
                                                        <next>
                                                          <block type="s4d_volume" id="0S~YwZ2F5mJ6^e?EV._7">
                                                            <value name="QUEUE">
                                                              <block type="s4d_get_queue" id="Lfn(qg!.K+J7Pdx$T]Q*">
                                                                <value name="SERVER">
                                                                  <block type="s4d_message_guild" id=";6d]E0E6Y8^Y^+5wKS!f"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="VOLUME">
                                                              <block type="variables_get" id="V%N*M#5B1;_*!ym\`Wv;h">
                                                                <field name="VAR" id="{sUGJ(yKN[lJQV8zirk3">volume</field>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_reply" id="xje=rX4r(jK{%=Ce3t+S">
                                                                <value name="CONTENT">
                                                                  <shadow type="text" id="y((sY?L7yUQE4^G+DR-%">
                                                                    <field name="TEXT">the volume need to be less then 100!</field>
                                                                  </shadow>
                                                                  <block type="text_join" id="7jxNm-LHDF}nUxY_sxKb">
                                                                    <mutation items="2"></mutation>
                                                                    <value name="ADD0">
                                                                      <block type="text" id="|e7=.0)lF?[Qz_GEiDlC">
                                                                        <field name="TEXT">the volume is now </field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="ADD1">
                                                                      <block type="variables_get" id="yv4I%+hwu1\`ps8F)Ds:2">
                                                                        <field name="VAR" id="{sUGJ(yKN[lJQV8zirk3">volume</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
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
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </statement>
                                <next>
                                  <block type="controls_if" id="0F?5-{2eL(Y]8ZFOt~WX">
                                    <value name="IF0">
                                      <block type="logic_compare" id="~tpBYp6].P]4vk?4S;(g">
                                        <field name="OP">EQ</field>
                                        <value name="A">
                                          <block type="variables_get" id="/;Dp:}L:K6GNY-!h6~9V">
                                            <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="text" id="i4bHFA!oza-_m0?ONMp#">
                                            <field name="TEXT">!skip</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="controls_if" id="d]zvPC3.=mcG/\`*e*K/f">
                                        <value name="IF0">
                                          <block type="logic_compare" id="Re:gWT%$j=+h8ur,(uXF">
                                            <field name="OP">EQ</field>
                                            <value name="A">
                                              <block type="s4d_voice_channel" id="Sts9_8c_P7NF7NSpQ~:,"></block>
                                            </value>
                                            <value name="B">
                                              <block type="logic_null" id="aSJY*h{m1h-:|lYI1pxu"></block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="s4d_reply" id="%8)JeN3n@P\`ls\`;],eA;">
                                            <value name="CONTENT">
                                              <shadow type="text" id="Ck25{@eA51tj6D|z:9wr">
                                                <field name="TEXT">you are not in a voice channel!</field>
                                              </shadow>
                                            </value>
                                            <next>
                                              <block type="s4d_return" id="gM=3+KF7rPQCftaL0H(+"></block>
                                            </next>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="controls_if" id="Zc@.t?Zwl\`4pC6|VId$_">
                                            <value name="IF0">
                                              <block type="logic_compare" id="BFu#WiG4*9)3MyTSsNm]">
                                                <field name="OP">NEQ</field>
                                                <value name="A">
                                                  <block type="s4d_voice_channel_id" id="x[j,%,C(:;GeoYXUA]g:"></block>
                                                </value>
                                                <value name="B">
                                                  <block type="s4d_bot_voice_channel" id="/[iZ~-2Rx8vx$i4IKoth"></block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="DO0">
                                              <block type="s4d_reply" id="C_~V(:Q^WCZ^@Z@wi38d">
                                                <value name="CONTENT">
                                                  <shadow type="text" id="L{5@3y0Ap_ltAYeUp/CQ">
                                                    <field name="TEXT">you are not in my voice channel!</field>
                                                  </shadow>
                                                </value>
                                                <next>
                                                  <block type="s4d_return" id="}e:p6iFz|aSYw@7J4h-A"></block>
                                                </next>
                                              </block>
                                            </statement>
                                            <next>
                                              <block type="controls_if" id="B_LclEI4N[}U.(45U(2M">
                                                <value name="IF0">
                                                  <block type="logic_negate" id="2sTj9r@RL-?836oicu)I">
                                                    <value name="BOOL">
                                                      <block type="s4d_playing" id="_aevSTqEl{etCf]xwlWW">
                                                        <value name="QUEUE">
                                                          <block type="s4d_get_queue" id="/*p5C$nGWYrii^[sS99F">
                                                            <value name="SERVER">
                                                              <block type="s4d_message_guild" id="2,PX%K5gS*y|{b])k9Kc"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO0">
                                                  <block type="s4d_reply" id="lfYn7|b1$)4odz|Rv*)Q">
                                                    <value name="CONTENT">
                                                      <shadow type="text" id="/^sRY57}[/)c@KvKGX@N">
                                                        <field name="TEXT">there is no music playing!</field>
                                                      </shadow>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_return" id="]^IMi9DA5}tMyjO[EY1y"></block>
                                                    </next>
                                                  </block>
                                                </statement>
                                                <next>
                                                  <block type="s4d_skip" id="63*4lgXY/YM8Fnar*si5">
                                                    <value name="QUEUE">
                                                      <block type="s4d_get_queue" id="BDVyuPL@a61tuxL8l*;l">
                                                        <value name="SERVER">
                                                          <block type="s4d_message_guild" id="_VNSVAnL7(*2CR6GD93q"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_reply" id="KD%uA%#Z^{#hws$16pGk">
                                                        <value name="CONTENT">
                                                          <shadow type="text" id="dN_uOA,{GMDv@LJwm2eU">
                                                            <field name="TEXT">Hey!</field>
                                                          </shadow>
                                                          <block type="text_join" id="X2PBWAY{.F6#*[H!U5FU">
                                                            <mutation items="2"></mutation>
                                                            <value name="ADD0">
                                                              <block type="text" id="t_Pw=!8wW1q@T-CD.,Wu">
                                                                <field name="TEXT">skipped music </field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD1">
                                                              <block type="s4d_current_track" id="a04OG7;kv9uL315{.S,*">
                                                                <value name="QUEUE">
                                                                  <block type="s4d_get_queue" id="2Lyp3db0^M1^)QGx.5NL">
                                                                    <value name="SERVER">
                                                                      <block type="s4d_message_guild" id="IIs5hXOV2U4YNQn)wZeO"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
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
                                    <next>
                                      <block type="controls_if" id=":{dpQvX{K=5znV@Lxfu=">
                                        <value name="IF0">
                                          <block type="logic_compare" id="61,/TZT*.]:F}:H[q=vo">
                                            <field name="OP">EQ</field>
                                            <value name="A">
                                              <block type="variables_get" id="H];.SCRzKed@h.x\`a]IR">
                                                <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="text" id="F[O|NbzsnpJ3!%/@n[bf">
                                                <field name="TEXT">!loop</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="variables_set" id="|r(V=E{%Gf^qS@42luLH">
                                            <field name="VAR" id="-3h|hvM5S2x_ir5)h(b!">onoff</field>
                                            <value name="VALUE">
                                              <block type="lists_getIndex" id="AMPq6W|r0RGmG6[jB;Qz">
                                                <mutation statement="false" at="true"></mutation>
                                                <field name="MODE">GET</field>
                                                <field name="WHERE">FROM_START</field>
                                                <value name="VALUE">
                                                  <block type="variables_get" id="=v5q:_=y~ZxDM~Zedjre">
                                                    <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                  </block>
                                                </value>
                                                <value name="AT">
                                                  <block type="math_number" id="lYW76!5nxjLnfT-al{W/">
                                                    <field name="NUM">1</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="controls_if" id="Em0!![ON]efgXwOPLme~">
                                                <mutation elseif="1" else="1"></mutation>
                                                <value name="IF0">
                                                  <block type="logic_compare" id="e:xG[|L|bnWJ}qsb|TYl">
                                                    <field name="OP">EQ</field>
                                                    <value name="A">
                                                      <block type="variables_get" id="R8d#=~Dy{5V3cvv)i!t7">
                                                        <field name="VAR" id="-3h|hvM5S2x_ir5)h(b!">onoff</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="text" id="4#s{*th@l8%;6[(tQvyl">
                                                        <field name="TEXT">on</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO0">
                                                  <block type="controls_if" id="zz;u:G!Imm*ouu6nwVlo">
                                                    <value name="IF0">
                                                      <block type="logic_compare" id="g}a96s9)~K.BQsl$3Ep9">
                                                        <field name="OP">EQ</field>
                                                        <value name="A">
                                                          <block type="s4d_voice_channel" id="g3@J}?;kYfio%/yTY%0,"></block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="logic_null" id="uOKg%}@H2F+EY0#{@B2O"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="s4d_reply" id="Q!_(1Hm89{gXDe6]T#!#">
                                                        <value name="CONTENT">
                                                          <shadow type="text" id="G!SJf(\`RBj7J}DC3,?xQ">
                                                            <field name="TEXT">you are not in a voice channel!</field>
                                                          </shadow>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_return" id="c0lD(2783#D7^lEAO*xd"></block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="controls_if" id="~}8$(EA]_rukMVK)lVU1">
                                                        <value name="IF0">
                                                          <block type="logic_compare" id="^w#yu$Yy:]^Uf8KhJ_SQ">
                                                            <field name="OP">NEQ</field>
                                                            <value name="A">
                                                              <block type="s4d_voice_channel_id" id="=.*?hm|N4$u;_]P2dpK%"></block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="s4d_bot_voice_channel" id="8^GxJ40%z?3e+@RqJb0j"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <statement name="DO0">
                                                          <block type="s4d_reply" id="EcV3)|qI.@GCq5]S*nK7">
                                                            <value name="CONTENT">
                                                              <shadow type="text" id="Dm~9T@D*0OO(*g3LMR^L">
                                                                <field name="TEXT">you are not in my voice channel!</field>
                                                              </shadow>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_return" id="mO|IYHtd;AN+JAp(S5GR"></block>
                                                            </next>
                                                          </block>
                                                        </statement>
                                                        <next>
                                                          <block type="controls_if" id="t6^EYVuJ(}c83k\`CF.px">
                                                            <value name="IF0">
                                                              <block type="logic_negate" id="b*4)cfU5ini$2I3K];r|">
                                                                <value name="BOOL">
                                                                  <block type="s4d_playing" id="fnp/e@=ZIctJK\`!s5%Pe">
                                                                    <value name="QUEUE">
                                                                      <block type="s4d_get_queue" id="44D}w]hvq6I^[\`pCRgaF">
                                                                        <value name="SERVER">
                                                                          <block type="s4d_message_guild" id="+{S-cA^NTIRadx5V^?@r"></block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <statement name="DO0">
                                                              <block type="s4d_reply" id="%j@qIa}\`CH6%h2q_1qKc">
                                                                <value name="CONTENT">
                                                                  <shadow type="text" id="zhS]yR(=bDUozHzsA:iB">
                                                                    <field name="TEXT">there is no music playing!</field>
                                                                  </shadow>
                                                                </value>
                                                                <next>
                                                                  <block type="s4d_return" id="HU{PK9*q(0_Y.23z^/*}"></block>
                                                                </next>
                                                              </block>
                                                            </statement>
                                                            <next>
                                                              <block type="s4d_loop" id="!yy[4#zXW$fcmv^oAY|g">
                                                                <value name="QUEUE">
                                                                  <block type="s4d_get_queue" id="C]3qh9$zlV\`u2c.huw-Q">
                                                                    <value name="SERVER">
                                                                      <block type="s4d_message_guild" id="U3w:h!,AsSrt\`(|cav0e"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="LOOPING">
                                                                  <block type="logic_boolean" id="0*_QwMkmxT}s-i\`%079O">
                                                                    <field name="BOOL">TRUE</field>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="s4d_reply" id="j$TjL~3c@d16P[}ANX$r">
                                                                    <value name="CONTENT">
                                                                      <shadow type="text" id="2rGPf-!aLaihVcBh/M.1">
                                                                        <field name="TEXT">loop on</field>
                                                                      </shadow>
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
                                                <value name="IF1">
                                                  <block type="logic_compare" id="YY+xg)0APZDyep9}n*yE">
                                                    <field name="OP">EQ</field>
                                                    <value name="A">
                                                      <block type="variables_get" id="~I9jq4-JJ}]Sr|#(@%.j">
                                                        <field name="VAR" id="-3h|hvM5S2x_ir5)h(b!">onoff</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="text" id="~:06WDJ9LWcoE{y#2MbL">
                                                        <field name="TEXT">off</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO1">
                                                  <block type="controls_if" id="r1kMKrp;)%kk+=XgLiZn">
                                                    <value name="IF0">
                                                      <block type="logic_compare" id="w0?j}bG#(Mgd,3faEnI;">
                                                        <field name="OP">EQ</field>
                                                        <value name="A">
                                                          <block type="s4d_voice_channel" id="s@AnF(W?TviZIs6|KVF/"></block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="logic_null" id="(m_6.L4_yN.]UsD?jiVT"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="s4d_reply" id="Gu.iaF4*u0f3goG}!H$V">
                                                        <value name="CONTENT">
                                                          <shadow type="text" id="Fio4w$g.Xf~~slj6pxcN">
                                                            <field name="TEXT">you are not in a voice channel!</field>
                                                          </shadow>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_return" id="=KVOP1ujiuqE$s4,WR/h"></block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="controls_if" id="_hMALXy}4K#~Dr|wZ)/y">
                                                        <value name="IF0">
                                                          <block type="logic_compare" id="1PO]+1FZEJf*wMWwpc4T">
                                                            <field name="OP">NEQ</field>
                                                            <value name="A">
                                                              <block type="s4d_voice_channel_id" id="bboP2D4ka4/|Ua?4Oi1#"></block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="s4d_bot_voice_channel" id="6-t42y7LWpLROF!JEq,}"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <statement name="DO0">
                                                          <block type="s4d_reply" id="vcN~|n_uL#\`PjiH%Cc||">
                                                            <value name="CONTENT">
                                                              <shadow type="text" id="Zu9$C7AUFi@~#;nIU%~E">
                                                                <field name="TEXT">you are not in my voice channel!</field>
                                                              </shadow>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_return" id="8fv3W.g{WS/zYO^1\`gy="></block>
                                                            </next>
                                                          </block>
                                                        </statement>
                                                        <next>
                                                          <block type="controls_if" id="}wxMol|HgJ\`EuWB*D0DA">
                                                            <value name="IF0">
                                                              <block type="logic_negate" id="Y=P6bKh/EpPEAU%tF+~#">
                                                                <value name="BOOL">
                                                                  <block type="s4d_playing" id="H1lG!*BYRfETQ%rl=y)9">
                                                                    <value name="QUEUE">
                                                                      <block type="s4d_get_queue" id="FnM+9:MXL8lrS,)[QMKz">
                                                                        <value name="SERVER">
                                                                          <block type="s4d_message_guild" id="7];:2$TIyM9DH[]i!51Z"></block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <statement name="DO0">
                                                              <block type="s4d_reply" id="b]s*lD$*e9xkCqz2,*Qt">
                                                                <value name="CONTENT">
                                                                  <shadow type="text" id="ufpIeDy\`Gpk=Y%]h3{;e">
                                                                    <field name="TEXT">there is no music playing!</field>
                                                                  </shadow>
                                                                </value>
                                                                <next>
                                                                  <block type="s4d_return" id="On6gOpSM?9Id;Ud0II1]"></block>
                                                                </next>
                                                              </block>
                                                            </statement>
                                                            <next>
                                                              <block type="s4d_loop" id="TDc%|xznXDt{qEmxDq}8">
                                                                <value name="QUEUE">
                                                                  <block type="s4d_get_queue" id="$9wK]==g\`509#QF~J[[G">
                                                                    <value name="SERVER">
                                                                      <block type="s4d_message_guild" id="wgJV%(|OHNT;Y.99qEWb"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="LOOPING">
                                                                  <block type="logic_boolean" id="Z;L810-6RxkWvFr_p;zP">
                                                                    <field name="BOOL">FALSE</field>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="s4d_reply" id="bd-np%$PV)\`!%l3OiI3d">
                                                                    <value name="CONTENT">
                                                                      <shadow type="text" id=",R=LwgJL3;VwWz--#bxw">
                                                                        <field name="TEXT">loop off</field>
                                                                      </shadow>
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
                                                <statement name="ELSE">
                                                  <block type="s4d_reply" id=":C:,Se!+IoIoiyUj79Hj">
                                                    <value name="CONTENT">
                                                      <shadow type="text" id="2s9,=vrVJ0EJlIDp5zJX">
                                                        <field name="TEXT">you need to send !loop on/off</field>
                                                      </shadow>
                                                    </value>
                                                  </block>
                                                </statement>
                                              </block>
                                            </next>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="controls_if" id="1-vcpqlvK|)pCkUStPeN">
                                            <value name="IF0">
                                              <block type="logic_compare" id="W3qn1tYB3K0RW\`v;BVpZ">
                                                <field name="OP">EQ</field>
                                                <value name="A">
                                                  <block type="variables_get" id="o-D:^Dvo$!c(}g#tu4xq">
                                                    <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="text" id="!C_5llk7eE!2+6/o?;Xz">
                                                    <field name="TEXT">!back</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="DO0">
                                              <block type="controls_if" id="(.AhjHYSI))^71,Xg%{j">
                                                <value name="IF0">
                                                  <block type="logic_compare" id="E:mzkBM0veb_f^Kwc0GV">
                                                    <field name="OP">EQ</field>
                                                    <value name="A">
                                                      <block type="s4d_voice_channel" id="qTFWrQgDYFhUQJ=2Nf4M"></block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="logic_null" id="7%KM(WmxD{o{FLZo5gxU"></block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO0">
                                                  <block type="s4d_reply" id="$+8Sm:#a4N57jUb/|O$c">
                                                    <value name="CONTENT">
                                                      <shadow type="text" id="UZ2Df%,q4%P1O/B_M/1U">
                                                        <field name="TEXT">you are not in a voice channel!</field>
                                                      </shadow>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_return" id="B2iE_LQ.W\`A^%az@Vu6h"></block>
                                                    </next>
                                                  </block>
                                                </statement>
                                                <next>
                                                  <block type="controls_if" id="D2sJn}OP[4l)}h6_wjpu">
                                                    <value name="IF0">
                                                      <block type="logic_compare" id="u|qMHXVu%qEi:@XVVK;.">
                                                        <field name="OP">NEQ</field>
                                                        <value name="A">
                                                          <block type="s4d_voice_channel_id" id="DA^.RR1H;/RDA-d91_)m"></block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="s4d_bot_voice_channel" id="Py:N:k=R{YUUq(hFcYsG"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="s4d_reply" id="Sd|02,z4?pOBm5lZh6T2">
                                                        <value name="CONTENT">
                                                          <shadow type="text" id="Kk|OeLzTlOVN1lXQB_?p">
                                                            <field name="TEXT">you are not in my voice channel!</field>
                                                          </shadow>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_return" id="q-yf0jEDJrH}gJ(?oF4k"></block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="controls_if" id="NDI!yZ/t^8}CDJc:5Ehw">
                                                        <value name="IF0">
                                                          <block type="logic_negate" id=";T%R!xS~oJ-lh*!^4)r8">
                                                            <value name="BOOL">
                                                              <block type="s4d_playing" id="nqrrF)snme*p!XZMi~Q-">
                                                                <value name="QUEUE">
                                                                  <block type="s4d_get_queue" id="EW0u6A$,hWT~9/L!\`6E!">
                                                                    <value name="SERVER">
                                                                      <block type="s4d_message_guild" id="cnKIz)|8]/6qXfnZPc=M"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <statement name="DO0">
                                                          <block type="s4d_reply" id="q|goj|#;AM.3Z(CZ}.Q(">
                                                            <value name="CONTENT">
                                                              <shadow type="text" id="bDB5lJ,$CNd*gL6:Y\`]?">
                                                                <field name="TEXT">there is no music playing!</field>
                                                              </shadow>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_return" id="eI/MUlU,5Z]19(EfGAiU"></block>
                                                            </next>
                                                          </block>
                                                        </statement>
                                                        <next>
                                                          <block type="s4d_back" id="p.n(h%IK{oq7Gv7tno(8">
                                                            <value name="QUEUE">
                                                              <block type="s4d_get_queue" id="k^Cp^,FZSp$qLY6]{R$=">
                                                                <value name="SERVER">
                                                                  <block type="s4d_message_guild" id="1@PKd.N9E%hS#^{wqdTj"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_reply" id="2x4pcu!8l5~SC*{l%zhn">
                                                                <value name="CONTENT">
                                                                  <shadow type="text" id="owgA$iS$gD3I)jWZCYQZ">
                                                                    <field name="TEXT">playing previous music</field>
                                                                  </shadow>
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
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
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
</xml>
`;
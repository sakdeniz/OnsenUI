import PropTypes from 'prop-types';
import 'onsenui/esm/elements/ons-splitter';

import onsCustomElement from '../onsCustomElement';

/**
 * @original ons-splitter
 * @category menu
 * @tutorial react/Reference/splitter
 * @description
 * [en]  A component that enables responsive layout by implementing both a two-column layout and a sliding menu layout.
 *
 *    It can be configured to automatically expand into a column layout on large screens and collapse the menu on smaller screens. When the menu is collapsed the user can open it by swiping.
 [/en]
 * [ja][/ja]
 * @example
  <Splitter>
    <SplitterSide
      side="left"
      width={200}
      isSwipeable={true}>
      <Page> Page Left </Page>
    </SplitterSide>
    <SplitterContent>
      <Page> Page Content </Page>
    </SplitterContent>
    <SplitterSide
      side="right"
      width={300}
      collapse={!this.state.showRight}
      isOpen={this.state.openRight}
      onClose={this.handleRightClose.bind(this)}
      onOpen={this.handleRightOpen.bind(this)}
      isSwipeable={true}>
      <Page> Page Right </Page>
    </SplitterSide>
  </Splitter>
 */
const notAttributes = ['onDeviceBackButton'];

const Splitter = onsCustomElement('ons-splitter', {notAttributes});

Splitter.propTypes = {
  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

export default Splitter;

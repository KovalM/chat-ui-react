"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuiTextInput = MuiTextInput;

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _react = _interopRequireDefault(require("react"));

const useStyles = (0, _core.makeStyles)(theme => ({
  container: {
    flex: '1 1 auto',
    display: 'flex',
    '& > *': {
      flex: '1 1 auto',
      minWidth: 0
    },
    '& > * + *': {
      marginLeft: theme.spacing(1)
    },
    '& :last-child': {
      flex: '0 1 auto'
    }
  }
}));

function MuiTextInput({
  chatController,
  actionRequest
}) {
  const classes = useStyles();
  const chatCtl = chatController;

  const [value, setValue] = _react.default.useState(actionRequest.defaultValue);

  const setResponse = _react.default.useCallback(() => {
    if (value) {
      const res = {
        type: 'text',
        value
      };
      chatCtl.setActionResponse(actionRequest, res);
      setValue('');
    }
  }, [actionRequest, chatCtl, value]);

  const handleKeyDown = _react.default.useCallback(e => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      setResponse();
    }
  }, [setResponse]);

  const sendButtonText = actionRequest.sendButtonText ? actionRequest.sendButtonText : 'Send';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_core.TextField, {
    placeholder: actionRequest.placeholder,
    value: value,
    onChange: e => setValue(e.target.value),
    autoFocus: true,
    multiline: true,
    inputProps: {
      onKeyDown: handleKeyDown
    },
    variant: "outlined",
    rowsMax: 10
  }), /*#__PURE__*/_react.default.createElement(_core.Button, {
    type: "button",
    onClick: setResponse,
    disabled: !value,
    variant: "contained",
    color: "primary",
    startIcon: /*#__PURE__*/_react.default.createElement(_icons.Send, null)
  }, sendButtonText));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tdWkvTXVpVGV4dElucHV0LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsImZsZXgiLCJkaXNwbGF5IiwibWluV2lkdGgiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsIk11aVRleHRJbnB1dCIsImNoYXRDb250cm9sbGVyIiwiYWN0aW9uUmVxdWVzdCIsImNsYXNzZXMiLCJjaGF0Q3RsIiwidmFsdWUiLCJzZXRWYWx1ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJkZWZhdWx0VmFsdWUiLCJzZXRSZXNwb25zZSIsInVzZUNhbGxiYWNrIiwicmVzIiwidHlwZSIsInNldEFjdGlvblJlc3BvbnNlIiwiaGFuZGxlS2V5RG93biIsImUiLCJuYXRpdmVFdmVudCIsImlzQ29tcG9zaW5nIiwia2V5Iiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRCdXR0b25UZXh0IiwicGxhY2Vob2xkZXIiLCJ0YXJnZXQiLCJvbktleURvd24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUtBLE1BQU1BLFNBQVMsR0FBRyxzQkFBWUMsS0FBRCxLQUFtQjtBQUM5Q0MsRUFBQUEsU0FBUyxFQUFFO0FBQ1RDLElBQUFBLElBQUksRUFBRSxVQURHO0FBRVRDLElBQUFBLE9BQU8sRUFBRSxNQUZBO0FBR1QsYUFBUztBQUNQRCxNQUFBQSxJQUFJLEVBQUUsVUFEQztBQUVQRSxNQUFBQSxRQUFRLEVBQUU7QUFGSCxLQUhBO0FBT1QsaUJBQWE7QUFDWEMsTUFBQUEsVUFBVSxFQUFFTCxLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkO0FBREQsS0FQSjtBQVVULHFCQUFpQjtBQUNmSixNQUFBQSxJQUFJLEVBQUU7QUFEUztBQVZSO0FBRG1DLENBQW5CLENBQVgsQ0FBbEI7O0FBaUJPLFNBQVNLLFlBQVQsQ0FBc0I7QUFDM0JDLEVBQUFBLGNBRDJCO0FBRTNCQyxFQUFBQTtBQUYyQixDQUF0QixFQU1nQjtBQUNyQixRQUFNQyxPQUFPLEdBQUdYLFNBQVMsRUFBekI7QUFDQSxRQUFNWSxPQUFPLEdBQUdILGNBQWhCOztBQUNBLFFBQU0sQ0FBQ0ksS0FBRCxFQUFRQyxRQUFSLElBQW9CQyxlQUFNQyxRQUFOLENBQWVOLGFBQWEsQ0FBQ08sWUFBN0IsQ0FBMUI7O0FBRUEsUUFBTUMsV0FBVyxHQUFHSCxlQUFNSSxXQUFOLENBQWtCLE1BQVk7QUFDaEQsUUFBSU4sS0FBSixFQUFXO0FBQ1QsWUFBTU8sR0FBdUIsR0FBRztBQUFFQyxRQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQlIsUUFBQUE7QUFBaEIsT0FBaEM7QUFDQUQsTUFBQUEsT0FBTyxDQUFDVSxpQkFBUixDQUEwQlosYUFBMUIsRUFBeUNVLEdBQXpDO0FBQ0FOLE1BQUFBLFFBQVEsQ0FBQyxFQUFELENBQVI7QUFDRDtBQUNGLEdBTm1CLEVBTWpCLENBQUNKLGFBQUQsRUFBZ0JFLE9BQWhCLEVBQXlCQyxLQUF6QixDQU5pQixDQUFwQjs7QUFRQSxRQUFNVSxhQUFhLEdBQUdSLGVBQU1JLFdBQU4sQ0FDbkJLLENBQUQsSUFBdUQ7QUFDckQsUUFBSUEsQ0FBQyxDQUFDQyxXQUFGLENBQWNDLFdBQWxCLEVBQStCO0FBQzdCO0FBQ0Q7O0FBRUQsUUFBSUYsQ0FBQyxDQUFDRyxHQUFGLEtBQVUsT0FBVixJQUFxQixDQUFDSCxDQUFDLENBQUNJLFFBQTVCLEVBQXNDO0FBQ3BDSixNQUFBQSxDQUFDLENBQUNLLGNBQUY7QUFDQVgsTUFBQUEsV0FBVztBQUNaO0FBQ0YsR0FWbUIsRUFXcEIsQ0FBQ0EsV0FBRCxDQVhvQixDQUF0Qjs7QUFjQSxRQUFNWSxjQUFjLEdBQUdwQixhQUFhLENBQUNvQixjQUFkLEdBQ25CcEIsYUFBYSxDQUFDb0IsY0FESyxHQUVuQixNQUZKO0FBSUEsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRW5CLE9BQU8sQ0FBQ1Q7QUFBeEIsa0JBQ0UsNkJBQUMsZUFBRDtBQUNFLElBQUEsV0FBVyxFQUFFUSxhQUFhLENBQUNxQixXQUQ3QjtBQUVFLElBQUEsS0FBSyxFQUFFbEIsS0FGVDtBQUdFLElBQUEsUUFBUSxFQUFHVyxDQUFELElBQWFWLFFBQVEsQ0FBQ1UsQ0FBQyxDQUFDUSxNQUFGLENBQVNuQixLQUFWLENBSGpDO0FBSUUsSUFBQSxTQUFTLE1BSlg7QUFLRSxJQUFBLFNBQVMsTUFMWDtBQU1FLElBQUEsVUFBVSxFQUFFO0FBQUVvQixNQUFBQSxTQUFTLEVBQUVWO0FBQWIsS0FOZDtBQU9FLElBQUEsT0FBTyxFQUFDLFVBUFY7QUFRRSxJQUFBLE9BQU8sRUFBRTtBQVJYLElBREYsZUFXRSw2QkFBQyxZQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLElBQUEsT0FBTyxFQUFFTCxXQUZYO0FBR0UsSUFBQSxRQUFRLEVBQUUsQ0FBQ0wsS0FIYjtBQUlFLElBQUEsT0FBTyxFQUFDLFdBSlY7QUFLRSxJQUFBLEtBQUssRUFBQyxTQUxSO0FBTUUsSUFBQSxTQUFTLGVBQUUsNkJBQUMsV0FBRDtBQU5iLEtBUUdpQixjQVJILENBWEYsQ0FERjtBQXdCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgVGV4dEZpZWxkLCBUaGVtZSwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IFNlbmQgYXMgU2VuZEljb24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2hhdENvbnRyb2xsZXIgfSBmcm9tICcuLi9jaGF0LWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVGV4dEFjdGlvblJlcXVlc3QsIFRleHRBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uL2NoYXQtdHlwZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICcmID4gKic6IHtcbiAgICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgICBtaW5XaWR0aDogMCxcbiAgICB9LFxuICAgICcmID4gKiArIConOiB7XG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIH0sXG4gICAgJyYgOmxhc3QtY2hpbGQnOiB7XG4gICAgICBmbGV4OiAnMCAxIGF1dG8nLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWlUZXh0SW5wdXQoe1xuICBjaGF0Q29udHJvbGxlcixcbiAgYWN0aW9uUmVxdWVzdCxcbn06IHtcbiAgY2hhdENvbnRyb2xsZXI6IENoYXRDb250cm9sbGVyO1xuICBhY3Rpb25SZXF1ZXN0OiBUZXh0QWN0aW9uUmVxdWVzdDtcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGNoYXRDdGwgPSBjaGF0Q29udHJvbGxlcjtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShhY3Rpb25SZXF1ZXN0LmRlZmF1bHRWYWx1ZSk7XG5cbiAgY29uc3Qgc2V0UmVzcG9uc2UgPSBSZWFjdC51c2VDYWxsYmFjaygoKTogdm9pZCA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCByZXM6IFRleHRBY3Rpb25SZXNwb25zZSA9IHsgdHlwZTogJ3RleHQnLCB2YWx1ZSB9O1xuICAgICAgY2hhdEN0bC5zZXRBY3Rpb25SZXNwb25zZShhY3Rpb25SZXF1ZXN0LCByZXMpO1xuICAgICAgc2V0VmFsdWUoJycpO1xuICAgIH1cbiAgfSwgW2FjdGlvblJlcXVlc3QsIGNoYXRDdGwsIHZhbHVlXSk7XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KTogdm9pZCA9PiB7XG4gICAgICBpZiAoZS5uYXRpdmVFdmVudC5pc0NvbXBvc2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiAhZS5zaGlmdEtleSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFJlc3BvbnNlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbc2V0UmVzcG9uc2VdLFxuICApO1xuXG4gIGNvbnN0IHNlbmRCdXR0b25UZXh0ID0gYWN0aW9uUmVxdWVzdC5zZW5kQnV0dG9uVGV4dFxuICAgID8gYWN0aW9uUmVxdWVzdC5zZW5kQnV0dG9uVGV4dFxuICAgIDogJ1NlbmQnO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgcGxhY2Vob2xkZXI9e2FjdGlvblJlcXVlc3QucGxhY2Vob2xkZXJ9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKTogdm9pZCA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgaW5wdXRQcm9wcz17eyBvbktleURvd246IGhhbmRsZUtleURvd24gfX1cbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgcm93c01heD17MTB9XG4gICAgICAvPlxuICAgICAgPEJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17c2V0UmVzcG9uc2V9XG4gICAgICAgIGRpc2FibGVkPXshdmFsdWV9XG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBzdGFydEljb249ezxTZW5kSWNvbiAvPn1cbiAgICAgID5cbiAgICAgICAge3NlbmRCdXR0b25UZXh0fVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=
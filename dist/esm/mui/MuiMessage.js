import { Avatar, Box, Grow, Typography, Button } from '@material-ui/core';
import React from 'react';
export function AudioMessageButton(props) {
  if (props.component) {
    return props.component;
  }

  return /*#__PURE__*/React.createElement(Button, {
    style: {
      flex: '1 0 0%',
      display: 'flex',
      flexDirection: 'row',
      border: '0px',
      color: 'rgb(63, 81, 181)',
      margin: '0px 0px 5px 10px',
      height: '20px',
      width: '20px',
      boxShadow: '1px 1px 2px rgba(0,0,0,.3)',
      marginTop: 'auto'
    }
  }, "Sound");
}
export function MuiMessage({
  id,
  message,
  showDateTime
}) {
  if (message.deletedAt) {
    return /*#__PURE__*/React.createElement("div", {
      id: id
    });
  }

  const dispDate = message.updatedAt ? message.updatedAt : message.createdAt;
  const component = message.audioButtonComponent;
  const audioButtonProps = {
    component
  };

  const playSoundContent = async () => {
    if (message.audio) {
      const sound = new Audio('data:audio/wav;base64,' + message.audio);
      await sound.play();
    }
  };

  const ChatAvator = /*#__PURE__*/React.createElement(Box, {
    minWidth: 0,
    flexShrink: 0,
    ml: message.self ? 1 : 0,
    mr: message.self ? 0 : 1
  }, /*#__PURE__*/React.createElement(Avatar, {
    alt: message.username,
    src: message.avatar
  }));
  const ChatUsername = /*#__PURE__*/React.createElement(Box, {
    maxWidth: "100%",
    mx: 1
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    align: message.self ? 'right' : 'left'
  }, message.username));
  const ChatDate = /*#__PURE__*/React.createElement(Box, {
    maxWidth: "100%",
    mx: 1
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    align: message.self ? 'right' : 'left',
    color: "textSecondary"
  }, dispDate === null || dispDate === void 0 ? void 0 : dispDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })));
  return /*#__PURE__*/React.createElement(Grow, {
    in: true
  }, /*#__PURE__*/React.createElement(Box, {
    id: id,
    maxWidth: "100%",
    flex: "0 1 auto",
    my: 1,
    pl: message.self ? '20%' : 0,
    pr: message.self ? 0 : '20%',
    display: "flex",
    justifyContent: message.self ? 'flex-end' : 'flex-start',
    style: {
      overflowWrap: 'break-word'
    }
  }, message.avatar && !message.self && ChatAvator, /*#__PURE__*/React.createElement(Box, {
    minWidth: 0,
    display: "flex",
    flexDirection: "column"
  }, message.username && ChatUsername, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "100%",
    py: 1,
    px: 2,
    bgcolor: message.self ? 'primary.main' : 'background.paper',
    color: message.self ? 'primary.contrastText' : 'text.primary',
    borderRadius: 16,
    boxShadow: 2
  }, message.type === 'text' && /*#__PURE__*/React.createElement(Typography, {
    variant: "body1",
    style: {
      whiteSpace: 'pre-wrap'
    }
  }, message.content), message.type === 'text_audio' && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 1 0%',
      display: 'flex',
      flexDirection: 'row'
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body1",
    style: {
      overflowWrap: 'break-word',
      whiteSpace: 'pre-wrap'
    }
  }, message.content), /*#__PURE__*/React.createElement("div", {
    onClick: playSoundContent
  }, /*#__PURE__*/React.createElement(AudioMessageButton, audioButtonProps))), message.type === 'jsx' && /*#__PURE__*/React.createElement("div", null, message.content)), showDateTime && ChatDate), message.avatar && message.self && ChatAvator));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tdWkvTXVpTWVzc2FnZS50c3giXSwibmFtZXMiOlsiQXZhdGFyIiwiQm94IiwiR3JvdyIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJSZWFjdCIsIkF1ZGlvTWVzc2FnZUJ1dHRvbiIsInByb3BzIiwiY29tcG9uZW50IiwiZmxleCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYm9yZGVyIiwiY29sb3IiLCJtYXJnaW4iLCJoZWlnaHQiLCJ3aWR0aCIsImJveFNoYWRvdyIsIm1hcmdpblRvcCIsIk11aU1lc3NhZ2UiLCJpZCIsIm1lc3NhZ2UiLCJzaG93RGF0ZVRpbWUiLCJkZWxldGVkQXQiLCJkaXNwRGF0ZSIsInVwZGF0ZWRBdCIsImNyZWF0ZWRBdCIsImF1ZGlvQnV0dG9uQ29tcG9uZW50IiwiYXVkaW9CdXR0b25Qcm9wcyIsInBsYXlTb3VuZENvbnRlbnQiLCJhdWRpbyIsInNvdW5kIiwiQXVkaW8iLCJwbGF5IiwiQ2hhdEF2YXRvciIsInNlbGYiLCJ1c2VybmFtZSIsImF2YXRhciIsIkNoYXRVc2VybmFtZSIsIkNoYXREYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsIm92ZXJmbG93V3JhcCIsInR5cGUiLCJ3aGl0ZVNwYWNlIiwiY29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsTUFBVCxFQUFpQkMsR0FBakIsRUFBc0JDLElBQXRCLEVBQTRCQyxVQUE1QixFQUF3Q0MsTUFBeEMsUUFBc0QsbUJBQXREO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUlBLE9BQU8sU0FBU0Msa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQXFEO0FBQzFELE1BQUlBLEtBQUssQ0FBQ0MsU0FBVixFQUFxQjtBQUNuQixXQUFPRCxLQUFLLENBQUNDLFNBQWI7QUFDRDs7QUFDRCxzQkFBTyxvQkFBQyxNQUFEO0FBQ1AsSUFBQSxLQUFLLEVBQUc7QUFBQ0MsTUFBQUEsSUFBSSxFQUFFLFFBQVA7QUFBaUJDLE1B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LE9BQU8sQ0FBQ3lCLE9BRFgsQ0FWSixFQWNHekIsT0FBTyxDQUFDdUIsSUFBUixLQUFpQixZQUFqQixpQkFDQztBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUNuQyxNQUFBQSxJQUFJLEVBQUUsUUFBUDtBQUFpQkMsTUFBQUEsT0FBTyxFQUFFLE1BQTFCO0FBQWtDQyxNQUFBQSxhQUFhLEVBQUU7QUFBakQ7QUFBWixrQkFDRSxvQkFBQyxVQUFEO0FBQ0UsSUFBQSxPQUFPLEVBQUMsT0FEVjtBQUVFLElBQUEsS0FBSyxFQUFFO0FBQUVnQyxNQUFBQSxZQUFZLEVBQUUsWUFBaEI7QUFBOEJFLE1BQUFBLFVBQVUsRUFBRTtBQUExQztBQUZULEtBR0t4QixPQUFPLENBQUN5QixPQUhiLENBREYsZUFNRTtBQUFLLElBQUEsT0FBTyxFQUFFakI7QUFBZCxrQkFDRSxvQkFBQyxrQkFBRCxFQUF3QkQsZ0JBQXhCLENBREYsQ0FORixDQWZKLEVBMEJHUCxPQUFPLENBQUN1QixJQUFSLEtBQWlCLEtBQWpCLGlCQUEwQixpQ0FBTXZCLE9BQU8sQ0FBQ3lCLE9BQWQsQ0ExQjdCLENBRkYsRUE4Qkd4QixZQUFZLElBQUlpQixRQTlCbkIsQ0FaRixFQTRDR2xCLE9BQU8sQ0FBQ2dCLE1BQVIsSUFBa0JoQixPQUFPLENBQUNjLElBQTFCLElBQWtDRCxVQTVDckMsQ0FERixDQURGO0FBa0REIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBCb3gsIEdyb3csIFR5cG9ncmFwaHksIEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VDb250ZW50IH0gZnJvbSAnLi4vY2hhdC10eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdWRpb01lc3NhZ2VCdXR0b24ocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgaWYgKHByb3BzLmNvbXBvbmVudCkge1xuICAgIHJldHVybiBwcm9wcy5jb21wb25lbnQ7XG4gIH1cbiAgcmV0dXJuIDxCdXR0b25cbiAgc3R5bGU9IHt7ZmxleDogJzEgMCAwJScsIGRpc3BsYXk6ICdmbGV4JyxmbGV4RGlyZWN0aW9uOiAncm93JywgYm9yZGVyOiAnMHB4JywgY29sb3I6ICdyZ2IoNjMsIDgxLCAxODEpJywgbWFyZ2luOiAnMHB4IDBweCA1cHggMTBweCcsIGhlaWdodDogJzIwcHgnLCB3aWR0aDogJzIwcHgnLCBib3hTaGFkb3c6ICcxcHggMXB4IDJweCByZ2JhKDAsMCwwLC4zKScsIG1hcmdpblRvcDonYXV0byd9fVxuICA+U291bmQ8L0J1dHRvbj5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE11aU1lc3NhZ2Uoe1xuICBpZCxcbiAgbWVzc2FnZSxcbiAgc2hvd0RhdGVUaW1lLFxufToge1xuICBpZDogc3RyaW5nO1xuICBtZXNzYWdlOiBNZXNzYWdlPE1lc3NhZ2VDb250ZW50PjtcbiAgc2hvd0RhdGVUaW1lOiBib29sZWFuO1xufSk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGlmIChtZXNzYWdlLmRlbGV0ZWRBdCkge1xuICAgIHJldHVybiA8ZGl2IGlkPXtpZH0gLz47XG4gIH1cblxuICBjb25zdCBkaXNwRGF0ZSA9IG1lc3NhZ2UudXBkYXRlZEF0ID8gbWVzc2FnZS51cGRhdGVkQXQgOiBtZXNzYWdlLmNyZWF0ZWRBdDtcbiAgY29uc3QgY29tcG9uZW50ID0gbWVzc2FnZS5hdWRpb0J1dHRvbkNvbXBvbmVudDtcbiAgY29uc3QgYXVkaW9CdXR0b25Qcm9wcyA9IHsgY29tcG9uZW50IH07XG5cbiAgY29uc3QgcGxheVNvdW5kQ29udGVudCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAobWVzc2FnZS5hdWRpbykge1xuICAgICAgICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbygnZGF0YTphdWRpby93YXY7YmFzZTY0LCcgKyBtZXNzYWdlLmF1ZGlvKTtcbiAgICAgICAgYXdhaXQgc291bmQucGxheSgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBDaGF0QXZhdG9yID0gKFxuICAgIDxCb3hcbiAgICAgIG1pbldpZHRoPXswfVxuICAgICAgZmxleFNocmluaz17MH1cbiAgICAgIG1sPXttZXNzYWdlLnNlbGYgPyAxIDogMH1cbiAgICAgIG1yPXttZXNzYWdlLnNlbGYgPyAwIDogMX1cbiAgICA+XG4gICAgICA8QXZhdGFyIGFsdD17bWVzc2FnZS51c2VybmFtZX0gc3JjPXttZXNzYWdlLmF2YXRhcn0gLz5cbiAgICA8L0JveD5cbiAgKTtcblxuICBjb25zdCBDaGF0VXNlcm5hbWUgPSAoXG4gICAgPEJveCBtYXhXaWR0aD1cIjEwMCVcIiBteD17MX0+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBhbGlnbj17bWVzc2FnZS5zZWxmID8gJ3JpZ2h0JyA6ICdsZWZ0J30+XG4gICAgICAgIHttZXNzYWdlLnVzZXJuYW1lfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQm94PlxuICApO1xuXG4gIGNvbnN0IENoYXREYXRlID0gKFxuICAgIDxCb3ggbWF4V2lkdGg9XCIxMDAlXCIgbXg9ezF9PlxuICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgYWxpZ249e21lc3NhZ2Uuc2VsZiA/ICdyaWdodCcgOiAnbGVmdCd9XG4gICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICA+XG4gICAgICAgIHtkaXNwRGF0ZT8udG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICB9KX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L0JveD5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxHcm93IGluPlxuICAgICAgPEJveFxuICAgICAgICBpZD17aWR9XG4gICAgICAgIG1heFdpZHRoPVwiMTAwJVwiXG4gICAgICAgIGZsZXg9XCIwIDEgYXV0b1wiXG4gICAgICAgIG15PXsxfVxuICAgICAgICBwbD17bWVzc2FnZS5zZWxmID8gJzIwJScgOiAwfVxuICAgICAgICBwcj17bWVzc2FnZS5zZWxmID8gMCA6ICcyMCUnfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PXttZXNzYWdlLnNlbGYgPyAnZmxleC1lbmQnIDogJ2ZsZXgtc3RhcnQnfVxuICAgICAgICBzdHlsZT17eyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9fVxuICAgICAgPlxuICAgICAgICB7bWVzc2FnZS5hdmF0YXIgJiYgIW1lc3NhZ2Uuc2VsZiAmJiBDaGF0QXZhdG9yfVxuICAgICAgICA8Qm94IG1pbldpZHRoPXswfSBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICB7bWVzc2FnZS51c2VybmFtZSAmJiBDaGF0VXNlcm5hbWV9XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgbWF4V2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIHB5PXsxfVxuICAgICAgICAgICAgcHg9ezJ9XG4gICAgICAgICAgICBiZ2NvbG9yPXttZXNzYWdlLnNlbGYgPyAncHJpbWFyeS5tYWluJyA6ICdiYWNrZ3JvdW5kLnBhcGVyJ31cbiAgICAgICAgICAgIGNvbG9yPXttZXNzYWdlLnNlbGYgPyAncHJpbWFyeS5jb250cmFzdFRleHQnIDogJ3RleHQucHJpbWFyeSd9XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9ezE2fVxuICAgICAgICAgICAgYm94U2hhZG93PXsyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttZXNzYWdlLnR5cGUgPT09ICd0ZXh0JyAmJiAoXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcgfX0+XG4gICAgICAgICAgICAgICAge21lc3NhZ2UuY29udGVudH1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHttZXNzYWdlLnR5cGUgPT09ICd0ZXh0X2F1ZGlvJyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAnMCAxIDAlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93J319PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcsIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17cGxheVNvdW5kQ29udGVudH0+XG4gICAgICAgICAgICAgICAgICA8QXVkaW9NZXNzYWdlQnV0dG9uIHsuLi5hdWRpb0J1dHRvblByb3BzfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHttZXNzYWdlLnR5cGUgPT09ICdqc3gnICYmIDxkaXY+e21lc3NhZ2UuY29udGVudH08L2Rpdj59XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAge3Nob3dEYXRlVGltZSAmJiBDaGF0RGF0ZX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHttZXNzYWdlLmF2YXRhciAmJiBtZXNzYWdlLnNlbGYgJiYgQ2hhdEF2YXRvcn1cbiAgICAgIDwvQm94PlxuICAgIDwvR3Jvdz5cbiAgKTtcbn1cbiJdfQ==
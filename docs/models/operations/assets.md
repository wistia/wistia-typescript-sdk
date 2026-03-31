# Assets

Download links for the audio description files.

## Example Usage

```typescript
import { Assets } from "@wistia/wistia-api-client/models/operations";

let value: Assets = {
  mp3Url: "https://comfortable-developmental.info",
  webvtt: "<value>",
  webvttExtended: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                 | Type                                                                                                                                                                                                  | Required                                                                                                                                                                                              | Description                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mp3Url`                                                                                                                                                                                              | *string*                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                    | URL to download the MP3 audio file.                                                                                                                                                                   |
| `webvtt`                                                                                                                                                                                              | *string*                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                    | The WebVTT file contents with cue timings relative to the original video. Start and<br/>end times show when the text is relative to the scene<br/>                                                    |
| `webvttExtended`                                                                                                                                                                                      | *string*                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                    | The extended WebVTT file contents with timings that include pause durations. Start and<br/>end times correspond to when an audio description starts and ends. During this time<br/>the video will be paused.<br/> |
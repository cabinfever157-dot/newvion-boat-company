# Stitch MCP Setup & Troubleshooting Skill

## Overview

This skill handles the setup and troubleshooting of Stitch Multi-Tool Control Protocol (MCP) proxy, with special attention to Windows environment variable handling and cross-platform considerations.

## Key Features

- **Automatic Environment Detection**: Identifies Windows vs Unix environments
- **Smart Variable Handling**: Uses correct syntax for the detected platform
- **Session Management**: Ensures environment variables persist for the duration needed
- **Proxy Lifecycle Management**: Start, stop, and restart capabilities
- **Health Monitoring**: Verifies proxy connectivity and tool availability

## Usage

### Basic Setup
```bash
# The skill will automatically handle:
# 1. Environment detection
# 2. API key configuration
# 3. Proxy startup
# 4. Health verification
```

### Troubleshooting
The skill automatically detects and handles:
- Missing API keys
- Environment variable persistence issues
- Port conflicts
- Connection problems
- Proxy startup failures

## Technical Implementation

### Windows-Specific Logic
The skill understands that on Windows:
- `set VAR=value` only persists for current cmd session
- Multiple bash tool calls = multiple sessions
- Solution: Chain commands with `&&` in single session

### Error Recovery
The skill implements:
1. **Detection**: Identifies specific failure modes
2. **Analysis**: Determines root cause
3. **Correction**: Applies appropriate fix
4. **Verification**: Confirms resolution

## Configuration Options

- **Port Selection**: Default 8080, configurable
- **Debug Mode**: Enhanced logging for troubleshooting
- **Background Mode**: Run proxy as background process
- **Auto-Restart**: Automatic recovery from failures

## Integration Points

- **Memory System**: Stores setup history and troubleshooting steps
- **Tool Discovery**: Verifies available Stitch tools after setup
- **Health Monitoring**: Periodic proxy health checks
- **Error Reporting**: Detailed error information for debugging

## Development Notes

This skill was created to address the specific challenge of environment variable persistence across different shell sessions, particularly on Windows systems where the `set` command behaves differently than Unix `export`.
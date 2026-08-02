---
title: 'Board Management'
description: 'Manage Jira board connections and synchronization settings for your story maps'
---

# Board Management

Advanced Story Maps integrates deeply with your Jira boards to provide real-time synchronization and seamless workflow management. Understanding board management features helps you optimize the connection between your story maps and Jira projects.

## Board Connection Overview

### Supported Board Types

Advanced Story Maps works with all Jira board types:

**Scrum Boards:**
- Sprint-based planning and tracking
- Backlog management integration
- Sprint goal visualization
- Velocity tracking support

**Kanban Boards:**
- Continuous flow visualization
- WIP limit integration
- Cumulative flow support
- Cycle time tracking

**Mixed Boards:**
- Hybrid Scrum/Kanban workflows
- Custom board configurations
- Multiple project boards
- Cross-functional team boards

### Board Selection Criteria

When connecting boards to your story maps, consider:

**Project Alignment:**
- Board should contain issues relevant to your story map
- Project scope should match story map scope
- Team membership should overlap

**Data Quality:**
- Issues should have appropriate detail level
- Custom fields should be properly configured
- Workflow states should be well-defined

## Setting Up Board Connections

### Initial Board Connection

1. **Create New Map**: Start with creating a new dynamic story map
2. **Board Selection**: Choose from available Jira boards in your instance
3. **Permission Check**: Verify you have appropriate board access
4. **Configuration**: Set up initial sync parameters

### Board Configuration Options

#### Issue Import Settings

**Issue Types:**
- Select which issue types to include (Story, Bug, Task, Epic, etc.)
- Configure custom issue type mappings
- Set up issue type hierarchies

**Status Categories:**
- Choose which status categories to sync
- Map status categories to swimlanes
- Configure status-based filtering

**Custom JQL:**
- Add additional filtering with JQL queries
- Combine multiple criteria
- Exclude specific issues or components

#### Sync Frequency

**Real-time Sync:**
- Immediate updates for status changes
- Live assignee and priority updates
- Instant new issue detection

**Scheduled Sync:**
- Hourly, daily, or custom intervals
- Reduced API calls for large boards
- Batch processing for performance

**Manual Sync:**
- On-demand refresh capability
- Full resync when needed
- Conflict resolution control

## Managing Multiple Boards

### Multi-Board Maps

Advanced Story Maps supports connecting multiple boards to a single map:

**Use Cases:**
- Cross-team initiatives
- Multi-project releases
- Dependency visualization
- Portfolio-level planning

**Configuration:**
- Primary board for main workflow
- Secondary boards for dependencies
- Board-specific sync settings
- Conflict resolution rules

### Board Switching

Change connected boards while preserving map structure:

**Switching Process:**
1. **Backup Current State**: Export current map configuration
2. **Disconnect Current Board**: Safely remove existing connection
3. **Connect New Board**: Establish new board relationship
4. **Remap Issues**: Align existing map structure with new board
5. **Verify Sync**: Confirm proper synchronization

**Data Preservation:**
- Manual arrangements are maintained where possible
- Custom swimlanes are preserved
- User comments and annotations remain

## Board Synchronization Features

### Bidirectional Sync

Changes flow both ways between Jira and your story map:

**From Jira to Story Map:**
- Issue creation and deletion
- Status and assignee changes
- Priority and label updates
- Custom field modifications

**From Story Map to Jira:**
- Swimlane assignments (via custom fields)
- Priority adjustments
- Epic and component assignments
- Release planning updates

### Conflict Resolution

When conflicts arise between Jira and story map data:

**Conflict Types:**
- Simultaneous edits to same issue
- Deleted issues still in map
- Board permission changes
- Workflow configuration changes

**Resolution Strategies:**
- Jira takes precedence (default)
- Manual conflict resolution
- Automatic conflict handling
- User notification system

### Performance Optimization

**Large Board Management:**
- Efficient pagination for large datasets
- Incremental sync for changed items only
- Background processing for heavy operations
- API rate limit management

## Board-Specific Features

### Sprint Integration

For Scrum boards, Advanced Story Maps provides sprint-specific features:

**Sprint Planning:**
- Visualize sprint scope on story map
- Capacity planning with story points
- Sprint goal alignment
- Backlog prioritization

**Sprint Tracking:**
- Real-time sprint progress
- Burndown visualization
- Scope change tracking
- Sprint retrospective data

### Release Management

**Release Planning:**
- Map issues to target releases
- Cross-project release coordination
- Dependency management
- Release scope visualization

**Release Tracking:**
- Progress monitoring across releases
- Release health indicators
- Risk identification
- Stakeholder communication

## Board Permissions & Security

### Permission Requirements

**Minimum Permissions:**
- Browse project permission
- View issues permission
- Search issues permission

**Recommended Permissions:**
- Edit issues permission (for bidirectional sync)
- Administer project permission (for advanced features)
- Browse users permission (for assignee information)

**Admin Permissions:**
- Configure board settings
- Modify board filters
- Manage board access
- Set up automation rules

### Security Considerations

**Data Privacy:**
- Issue data is processed in real-time
- No data stored outside Jira instance
- Audit trail for all changes
- Compliance with organizational policies

**Access Control:**
- Board visibility inherits Jira permissions
- User-specific data filtering
- Project-level access controls
- Integration with Jira groups

## Troubleshooting Board Issues

### Common Connection Problems

**Board Not Visible:**
- Check Jira permissions
- Verify board sharing settings
- Confirm project access
- Review browser cache

**Sync Issues:**
- Verify network connectivity
- Check API rate limits
- Review error logs
- Test manual refresh

**Performance Problems:**
- Optimize JQL filters
- Reduce sync frequency
- Limit imported fields
- Contact support for large boards

### Diagnostic Tools

**Connection Test:**
- Verify board connectivity
- Check permission levels
- Test API responses
- Validate configuration

**Sync Status:**
- View last sync timestamp
- Check for sync errors
- Monitor API usage
- Review change logs

### Error Resolution

**Common Error Types:**
- Permission denied errors
- Board configuration changes
- Network timeout issues
- Data format problems

**Resolution Steps:**
1. **Identify Error Type**: Review error messages and logs
2. **Check Prerequisites**: Verify permissions and connectivity
3. **Test Configuration**: Validate board and filter settings
4. **Contact Support**: For persistent issues

## Advanced Board Features

### Custom Field Mapping

Map Jira custom fields to story map elements:

**Swimlane Mapping:**
- Map custom fields to horizontal swimlanes
- Support for select lists, radio buttons
- Multi-value field handling
- Dynamic swimlane creation

**Card Display:**
- Choose which fields appear on cards
- Configure field formatting
- Set up conditional display rules
- Optimize for readability

### Board Analytics

**Usage Statistics:**
- Sync frequency and performance
- User activity tracking
- Feature utilization metrics
- Performance optimization suggestions

**Health Monitoring:**
- Connection status alerts
- Sync error notifications
- Performance degradation warnings
- Proactive maintenance recommendations

---

## Next Steps

- [Settings](/docs/pro/features/settings) - Configure board-specific preferences
- [Map Types](/docs/pro/features/map-types) - Understand dynamic vs static maps
- [Admin Guide](/docs/pro/admin-guide) - Set up organizational board policies